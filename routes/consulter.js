const router = require('express').Router();

module.exports = (app) => {
    router.get("/", app.controllers.consulter.getAll);
}