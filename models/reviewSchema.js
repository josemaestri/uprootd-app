var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var ReviewSchema = new Schema({
    rootName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Root",
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    location: String,
    attributes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Attributes"
    },
    comments: String
});
var Reviews = mongoose.model("Reviews", ReviewSchema);

// Export the Example model
module.exports = Reviews;