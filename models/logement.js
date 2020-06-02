const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var logementSchema = new Schema({
    titre: String,
    urlPhotos: [String],
    descriptions: String,
    equipements: [{
        type: Schema.Types.ObjectId,
        ref: "Equipement",
    }, ],
    adresse: String,
    typesLogement: [String],
    hote: [{
        type: Schema.Types.ObjectId,
        ref: "Hote",
    }, ],
    prix: Number

});

module.exports = mongoose.model("Logement", logementSchema);