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
    effects: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Effects"
    },
    medical: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Medical"
    },
    sideEffects: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SideEffects"
    },
    flavors: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Flavors"
    },
    comments: String
});
var Reviews = mongoose.model("Reviews", ReviewSchema);

// Export the Example model
module.exports = Reviews;