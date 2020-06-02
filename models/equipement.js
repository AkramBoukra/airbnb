const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let equipementSchema = new Schema({ // Ici on définit les clés et les types de data.
    description: [String]
});

module.exports = mongoose.model("Equipement", equipementSchema);