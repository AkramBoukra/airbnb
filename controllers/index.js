module.exports = (app) => {
    app.controllers = {
        reservation: require("./reservation")(app),
        hote: require("./hote")(app),
        logement: require("./logement")(app),
        user: require("./user")(app),
    };
}