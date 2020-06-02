const router = require("express").Router();

module.exports = (app) => {


    router.get("/", app.controllers.hote.getAll);

    router.post("/create", app.controllers.hote.create);

    router.post("/getById", app.controllers.hote.getById);

    router.post("/update", app.controllers.hote.update);

    router.post("/delete", app.controllers.hote.remove);

    return router;
};

//  Donc ils commencent tous avec localhost:3000/hote