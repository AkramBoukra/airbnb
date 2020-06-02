module.exports = (app) => {
    //import de donnees de data.json
    let Hote = app.models.hote;
    //liste des hote

    function getAll(req, res) {
        Hote.find({}, (err, docs) => {
            if (err) {
                res.send(err);
            } else {
                res.send(hote);
            }
        });
    }

    function getById(req, res) {
        Hote.findById(req.body.id, function(err, hote) {
            if (err) {
                res.send(err);
            } else {
                res.send(hote);
            }
        });
    }

    function create(req, res) {
        Hote.create(req.body, function(err, hote) {
            if (err) {
                res.send(err);
            } else {
                res.send(hote);
            }
        });
    }

    function update(req, res) {
        Hote.findByIdAndUpdate(req.body.id, req.body, function(err, hote) {
            if (err) {
                res.send(err);
            } else {
                res.send(hote);
            }
        });
    }

    function remove(req, res) {
        Hote.findByIdAndRemove(req.body.id, function(err, hote) {
            if (err) {
                res.send(err);
            } else {
                res.send(hote);
            }
        });
    }
    //return la function  getall appeller juste avant


    return { getAll, create, update, getById, remove };
};