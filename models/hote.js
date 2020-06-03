const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let hoteSchema = new Schema({
    nom: String,
    prenom: String,
    email: String,
    motDePasse: String,
    adresse: String,
    dateDeNaissance: Date,
    noDeTel: String,
    logements: [{
        type: Schema.Types.ObjectId,
        ref: "Logement",
    },],
    langues: String,
});

module.exports = mongoose.model("Hote", hoteSchema);