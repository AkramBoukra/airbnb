module.exports = (app) => {
    //import de donnees de data.json
    let User = app.models.User;
    //liste des user

    function getAll(req, res) {
        User.find({}, (err, user) => {
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

    function many(req, res) {
       User.instertMany(arr, function(err, users) {
            if (err) {
                res.send(err);
            } else {
                res.send(users);
            }
            //return la function  getall appeller juste avant

        });
    }
    function verify(req, res) {
        User.findOne({ email: req.body.email }, function(err, user) {
            if(!user) {
                res.send("L'adresse mail " + req.body.email + " n'est pas correcte.");
            }
            else {
                User.findOne({ motDePasse: req.body.motDePasse }, function(err, user) {
                    if(!motDePasse) {
                        res.send("Mot de passe n'est pas correcte.");
                    }
                    else {
                        res.send("ça marche " + user);
                    }
                });
            }

        });
    }


    return { getAll, create, update, getById, remove, many, verify };
};