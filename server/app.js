require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("./model/user");
const Diamond = require("./model/diamond_purchase")
const Supplementary = require("./model/supplementary")
const auth = require("./middleware/auth");
const cors = require("cors");

const app = express();

app.use(express.json({ limit: "50mb" }));
const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};
app.use(cors(corsOpts));


app.post("/register", async (req, res) => {
  try {
    // Get user input
    const { name, email, password } = req.body;

    // Validate user input
    if (!(email && password && name)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      name,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    });

    // Create token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
    );
    // save user token
    user.token = token;

    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
      );

      // save user token
      user.token = token;

      // user
      res.status(200).json(user);
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
});

// diamond url

app.post('/diamond', async ( req, res) =>{
  const {data} = req.body;
  console.log(data)
  if (data.length>0){
    data.map((d,n)=>{
      Diamond.create(d)
    })
  }
  res.status(201).json({"success": true});
})

app.get("/diamond", async (req, res)=>{
  let query = req.query
  let page = query.page;
  let per_page = query.per_page;

  let useData = await Diamond.find().limit(Number(per_page)).skip(Number(per_page) * (Number(page) -1)).sort('desc')
  res.status(200).json(useData);
})

app.post('/supplementary', async (req, res)=>{
  const {data} = req.body;
  console.log(data)
  if (data.length>0){
    data.map((d,n)=>{
      Supplementary.create(d)
    })
  }
  res.status(201).json({"success": true});
})

app.get("/supplementary", async (req, res)=>{
  let query = req.query
  let page = query.page;
  let per_page = query.per_page;

  let supplementaryData = await Supplementary.find().limit(Number(per_page)).skip(Number(per_page) * (Number(page) -1)).sort('desc')
  res.status(200).json(supplementaryData);
})

app.get("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

// This should be the last route else any after it won't work
app.use("*", (req, res) => {
  res.status(404).json({
    success: "false",
    message: "Page not found",
    error: {
      statusCode: 404,
      message: "You reached a route that is not defined on this server",
    },
  });
});

module.exports = app;
