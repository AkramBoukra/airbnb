module.exports = (app) => {
    let Logement = app.models.Logement;

    function getAll(req, res) {
        Logement.find({}, (err, logement) => {
            if (err) {
                res.send(err);
            } else {
                res.send(logement);
            }
        });
    }

    function getById(req, res) {
        Logement.findById(req.body.id, function (err, logement) {
            if (err) {
                res.send(err);
            } else {
                res.send(logement);
            }
        }).
            populate({
                path: 'hote',
                select: 'nom prenom email noDeTel langues -_id '
            });
    }

    function create(req, res) {
        Logement.create(req.body, function (err, logement) {
            if (err) {
                res.send(err);
            } else {
                res.send(logement);
            }
        });
    }

    function update(req, res) {
        Logement.findByIdAndUpdate(req.body.id, req.body, function (err, logement) {
            if (err) {
                res.send(err);
            } else {
                res.send(logement);
            }
        });
    }

    function remove(req, res) {
        Logement.findByIdAndRemove(req.body.id, function (err, logement) {
            if (err) {
                res.send(err);
            } else {
                res.send(logement);
            }
        });
    }

    function many(req, res) {
        Logement.instertMany(arr, function (err, logements) {
            if (err) {
                res.send(err);
            } else {
                res.send(logements);
            }
        });
    }


    return { getAll, create, update, getById, remove, many, };
};