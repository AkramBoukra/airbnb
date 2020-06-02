module.exports = (app) => {
    app.use("/hote", require("./hote")(app));
    app.use("/user", require("./user")(app));
    app.use("/reservation", require("./reservation")(app));
    app.use("/logement", require("./logement")(app));
};