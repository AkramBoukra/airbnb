module.exports = (app) => {
    //import de donnees de data.json
    let Logement = app.models.Logement;
    //liste des reservation

    function getAll(req, res) {
        Logement.find({}, (err, docs) => {
            if (err) {
                res.send(err);
            } else {
                res.send(logement);
            }
        });
    }

    function getById(req, res) {
        Logement.findById(req.body.id, function(err, logement) {
            if (err) {
                res.send(err);
            } else {
                res.send(logement);
            }
        });
    }

    function create(req, res) {
        Logement.create(req.body, function(err, logement) {
            if (err) {
                res.send(err);
            } else {
                res.send(logement);
            }
        });
    }

    function update(req, res) {
        Logement.findByIdAndUpdate(req.body.id, req.body, function(err, logement) {
            if (err) {
                res.send(err);
            } else {
                res.send(logement);
            }
        });
    }

    function remove(req, res) {
        Logement.findByIdAndRemove(req.body.id, function(err, logement) {
            if (err) {
                res.send(err);
            } else {
                res.send(logement);
            }
        });
    }
    //return la function  getall appeller juste avant


    return { getAll, create, update, getById, remove };
};