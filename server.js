const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;

// requires the model with Passport-Local Mongoose plugged in
// const Users = require('./models/usersSchema');

// use static authenticate method of model in LocalStrategy
// passport.use(new LocalStrategy(Users.authenticate()));

// use static serialize and deserialize of model for passport session support
// passport.serializeUser(Users.serializeUser());
// passport.deserializeUser(Users.deserializeUser());

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(routes);

mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/kava");

app.listen(PORT, function(){
    console.log("API Server listening");
});