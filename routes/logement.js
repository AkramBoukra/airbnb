const router = require("express").Router();

module.exports = (app) => {

    router.get("/", app.controllers.logement.getAll);

    router.post("/create", app.controllers.logement.create);

    router.post("/getById", app.controllers.logement.getById);

    router.post("/update", app.controllers.logement.update);

    router.post("/delete", app.controllers.logement.remove);

    router.post("/many", app.controllers.logement.many);

    return router;
};