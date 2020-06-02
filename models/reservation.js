const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var reservationSchema = new Schema({
    arrivée: Date,
    départ: Date,
    equipements: [{
        type: Schema.Types.ObjectId,
        ref: "Equipement",
    }, ],
    totalPrice: Number,
    logement: [{
        type: Schema.Types.ObjectId,
        ref: "Logement",
    }, ],
});
module.exports = mongoose.model("Reservation", reservationSchema)