const router = require("express").Router();
const Usertype = require("../model/Usertype");
const verify = require("../routes/verifyToken");

// get all the registered users
router.get("/getusers",verify,async (req,res) =>{
    try{
        const users = await Usertype.find();
        res.json(users);
    } catch(error) {
        res.json({ message: error })
    }
});

// get specific user by id
router.get("/getusers/:userId",verify, async (req, res) => {
    try {
      const user = await Usertype.findById(req.params.userId);
      res.json(user);
    } catch (error) {
      res.json({ message: error });
    }
  });

module.exports = router;