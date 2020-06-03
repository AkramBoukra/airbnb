module.exports = (app) => {
    let Hote = app.models.Hote;
    function getAll(req, res) {
        Hote.find({}, (err, hote) => {
            if (err) {
                res.send(err);
            } else {
                res.send(hote);
            }
        });
    }

    function getById(req, res) {
        Hote.findById(req.body.id, function (err, hote) {
            if (err) {
                res.send(err);
            } else {
                res.send(hote);
            }
        });
    }

    function create(req, res) {
        Hote.create(req.body, function (err, hote) {
            if (err) {
                res.send(err);
            } else {
                res.send(hote);
            }
        });
    }

    function update(req, res) {
        Hote.findByIdAndUpdate(req.body.id, req.body, function (err, hote) {
            if (err) {
                res.send(err);
            } else {
                res.send(hote);
            }
        });
    }

    function remove(req, res) {
        Hote.findByIdAndRemove(req.body.id, function (err, hote) {
            if (err) {
                res.send(err);
            } else {
                res.send(hote);
            }
        });
    }
    function many(req, res) {
        Hote.instertMany(arr, function (err, hotes) {
            if (err) {
                res.send(err);
            } else {
                res.send(hotes);
            }

        });
    }

    function verify(req, res) {
        Hote.findOne({ email: req.body.email }, function (err, hote) {
            if (!hote) {
                res.send("L'adresse mail " + req.body.email + " n'est pas correcte.");
            }
            else {
                Hote.findOne({ motDePasse: req.body.motDePasse }, function (err, hote) {
                    if (!motDePasse) {
                        res.send("Mot de passe n'est pas correcte.");
                    }
                    else {
                        res.send("ça marche " + hote);
                    }
                });
            }

        });
    }
    return { getAll, create, update, getById, remove, many, verify };



};