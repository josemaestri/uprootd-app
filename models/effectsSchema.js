var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EffectsSchema = new Schema ({
    effect: String
});

var Effects = mongoose.model("Effects", EffectsSchema);

// Export the Example model
module.exports = Effects;