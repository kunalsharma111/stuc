const express = require("express");
const app = express();
const dotenv = require("dotenv");
var mongoose = require("mongoose"); 
var bodyParser = require('body-parser')
const cors = require("cors");
var nodemailer = require("nodemailer");
dotenv.config();
var url = process.env.DB_CONNECT;

// import routes
const userRoutes = require("./routes/user");

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// route middleware
app.use("/api/user",userRoutes);

// connect to db
mongoose.connect(url,{ useNewUrlParser: true , useUnifiedTopology:true}, function(err,db) 
{ 
     console.log("DB Connected"); 
});

// express server
app.listen(4000, () => console.log("server up and running on port 4000"));


let transport = nodemailer.createTransport({
     service: 'gmail',
     auth: {
        user: 'famemedia315@gmail.com',
        pass: 'famemedia123@'
     }
 });
 let mailDetails = { 
     from: 'famemedia315@gmail.com', 
     to: 'sharmakunal315@gmail.com', 
     subject: 'Test mail', 
     text: 'Node.js testing mail for GeeksforGeeks'
 }; 
 //send mail
 app.get('/sendmail', (req, res) => {
     mailTransporter.sendMail(mailDetails, function(err, data) { 
          if(err) { 
              console.log('Error Occurs'); 
          } else { 
              console.log('Email sent successfully'); 
          } 
      }); 
 });
 