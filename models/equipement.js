const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let equipementSchema = new Schema({
    description: [String]
});

module.exports = mongoose.model("Equipement", equipementSchema);