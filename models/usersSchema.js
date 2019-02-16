var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: "Required field"
    },
    firstname: {
        type: String,
        trim: true,
        required: "Required field"
    },
    lastname:{
        type: String,
        trim: true,
        required: "Required field"
    },
    location: {
        type: String,
        trim: true,
        required: "Required field"
    },
    email: {
        type: String,
        match: [/.+@.=\..+/, "Please enter a valid e-mail address"]
    },
    password: {
        type: String,
        required: true,
        validate: [
            function(input) {
              return input.length >= 6;
            },
            "Password should be more than 6 character."
          ]
        },
})

UserSchema.plugin(passportLocalMongoose);

var Users = mongoose.model("Users", UserSchema);

// Export the Example model
module.exports = Users;