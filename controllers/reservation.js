module.exports = (app) => {
    //import de donnees de data.json
    let Reservation = app.models.Reservation;
    //liste des reservation

    function getAll(req, res) {
        Reservation.find({}, (err, docs) => {
            if (err) {
                res.send(err);
            } else {
                res.send(reservation);
            }
        });
    }

    function getById(req, res) {
        Reservation.findById(req.body.id, function(err, reservation) {
            if (err) {
                res.send(err);
            } else {
                res.send(reservation);
            }
        });
    }

    function create(req, res) {
        Reservation.create(req.body, function(err, reservation) {
            if (err) {
                res.send(err);
            } else {
                res.send(reservation);
            }
        });
    }

    function update(req, res) {
        Reservation.findByIdAndUpdate(req.body.id, req.body, function(err, reservation) {
            if (err) {
                res.send(err);
            } else {
                res.send(reservation);
            }
        });
    }

    function remove(req, res) {
        Reservation.findByIdAndRemove(req.body.id, function(err, reservation) {
            if (err) {
                res.send(err);
            } else {
                res.send(reservation);
            }
        });
    }
    //return la function  getall appeller juste avant

    function many(req, res) {
        Reservation.instertMany(arr, function(err, reservations) {
            if (err) {
                res.send(err);
            } else {
                res.send(reservations);
            }
            //return la function  getall appeller juste avant

        });
    }


    return { getAll, create, update, getById, remove, many };
};