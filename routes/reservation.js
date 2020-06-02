const router = require("express").Router();

module.exports = (app) => {

    router.get("/", app.controllers.reservation.getAll);

    router.post("/create", app.controllers.reservation.create);

    router.post("/getById", app.controllers.reservation.getById);

    router.post("/update", app.controllers.reservation.update);

    router.post("/delete", app.controllers.reservation.remove);

    return router;
};