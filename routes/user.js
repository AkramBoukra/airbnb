const router = require("express").Router();

module.exports = (app) => {
    router.get("/", app.controllers.user.getAll);

    router.post("/create", app.controllers.user.create);

    router.post("/getById", app.controllers.user.getById);

    router.post("/update", app.controllers.user.update);

    router.post("/remove", app.controllers.user.remove);

    router.post("/many", app.controllers.user.many);

    router.post("/verify", app.controllers.user.verify);

    return router;
};