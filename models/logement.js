const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var logementSchema = new Schema({
    titre: String,
    urlPhotos: [String],
    descriptions: String,
    equipements: [Equipement],
    adresse: String,
    typesLogement: [String],
    hote: Hote,
    prixPourUneNuit: Number

});

module.exports = mongoose.model("Logement", logementSchema);