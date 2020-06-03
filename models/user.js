const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema({
    nom: String,
    prenom: String,
    email: String,
    motDePasse: String,
    adresse: String,
    dateDeNaissance: Date,
    noDeTel: String,
    reservations: [{
        type: Schema.Types.ObjectId,
        ref: "Reservation",
    },],
});

module.exports = mongoose.model("User", userSchema);