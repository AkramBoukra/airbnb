module.exports = (app) => {
    app.models = {
        Hote: require("./hote.js"),
        User: require("./user.js"),
        Logement: require("./logement.js"),
        Reservation: require("./reservation.js")
    };
};