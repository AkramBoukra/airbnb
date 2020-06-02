module.exports = (app) => {
    //import de donnees de data.json
    let User = app.models.User;
    //liste des user

    function getAll(req, res) {
        User.find({}, (err, docs) => {
            if (err) {
                res.send(err);
            } else {
                res.send(user);
            }
        });
    }

    function getById(req, res) {
        User.findById(req.body.id, function(err, user) {
            if (err) {
                res.send(err);
            } else {
                res.send(user);
            }
        });
    }

    function create(req, res) {
        User.create(req.body, function(err, user) {
            if (err) {
                res.send(err);
            } else {
                res.send(user);
            }
        });
    }

    function update(req, res) {
        User.findByIdAndUpdate(req.body.id, req.body, function(err, user) {
            if (err) {
                res.send(err);
            } else {
                res.send(user);
            }
        });
    }

    function remove(req, res) {
        User.findByIdAndRemove(req.body.id, function(err, user) {
            if (err) {
                res.send(err);
            } else {
                res.send(user);
            }
        });
    }
    //return la function  getall appeller juste avant


    return { getAll, create, update, getById, remove };
};