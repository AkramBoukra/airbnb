module.exports = (app) => {
    app.controllers = {
        reservation: require("./reservation")(app),
        hote: require("./hote")(app),
        logement: require("./logement")(app),
        equipement: require("./equipement")(app),
        user: require("./user")(app),
  };
};