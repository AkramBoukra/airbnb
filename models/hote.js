const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let hoteSchema = new Schema({ // Ici on définit les clés et les types de data.
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
    }, ],
    langues: String,
});

module.exports = mongoose.model("Hote", hoteSchema);