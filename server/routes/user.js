const router = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const verify = require("../routes/verifyToken");
var nodemailer = require("nodemailer");

//register 
router.post("/register", async  (req,res) => {
    // checking user id in DB
    const emailExists = await User.findOne({
        email: req.body.email
    })
    if(emailExists) return res.status(400).send("Email already exists");
    
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password,salt);
    
    // create new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        dob: req.body.dob,
        phone: req.body.phone,
        password: hashedPassword,
        registerdate : req.body.registerdate,
        type: req.body.type,
        status: req.body.status,
        coupon: req.body.coupon
    });
    try{
        const savedUser = await  user.save();
        res.send(savedUser);
    }catch(error){
        res.status(400).send(error);
    }
});

let sub;
// user login
router.post("/login", async (req,res)=>{
    // checking user email in db
    const user = await User.findOne({email: req.body.email})

    if(!user) return res.status(400).send("Email is wrong");
    // checking password
    const validPass = await bcrypt.compare(req.body.password,user.password);
    if(!validPass) return res.status(400).send("Password Incorrect");

    
    
    // create and assign a token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header("auth-token",token).send({token:token,role:user.type,status:user.status});
    sub = user._id;
});



// get all the registered users
router.get("/getusers",verify,async (req,res) =>{
    try{
        const users = await User.find();
        res.json(users);
    } catch(error) {
        res.json({ message: error })
    }
});

// get specific user by id
router.get("/getusers/:userId",verify, async (req, res) => {
    try {
      const user = await User.findById(req.params.userId);
      res.json(user);
    } catch (error) {
      res.json({ message: error });
    }
  });

//   get current user
  router.get('/cur',async  (req, res) => {
   try{
    const user = await User.findOne(sub);
    res.json(user);
   }catch(error){
       res.json({message:error});
   }
})






//send mail
router.post('/sendmail', async (req, res) => {
    console.log(req.body.params.email);
    let mailTransporter = nodemailer.createTransport({ 
        service: 'gmail', 
        auth: { 
            user: 'famemedia315@gmail.com', 
            pass: 'famemedia123@'
        } 
    }); 
      
    let mailDetails = { 
        from: 'famemedia315@gmail.com', 
        to: req.body.params.email, 
        subject: 'Confirm OTP For Stuc', 
        text: 'One time OTP is ' + req.body.params.otp
    }; 
        console.log('sending email..');
        console.log( req.body.params.otp);
        mailTransporter.sendMail(mailDetails, function(err, data) { 
            if(err) { 
                console.log('Error Occurs'); 
            } else { 
                console.log('Email sent successfully'); 
            } 
        }); 
});


router.post('/updatecoupon', async (req, res) => {
    try{
        const user = await User.updateOne({_id:req.body.params.id},{$set:{coupon:req.body.params.otp,status:'Active'}},(err,doc)=>{
            if(!err){
                console.log(doc);
                res.json('saved to DB');
            }
        });
    }catch(error){
        res.json({message:error});
    } 
});



module.exports = router;