module.exports = (app) => {
    app.use("/logement", require("./logement")(app)),
    app.use("/consulter", require("./consulter")(app)),
    app.use("/hote", require("./hote")(app)),
    app.use("/reservation", require("./reservation")(app)),
    app.use("/user", require("./user")(app))

}