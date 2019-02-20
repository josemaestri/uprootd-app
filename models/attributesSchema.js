var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AttributesSchema = new Schema ({
    name: String,
    type: String
});

var Attributes = mongoose.model("Attributes", AttributesSchema);

// Export the Example model
module.exports = Attributes;