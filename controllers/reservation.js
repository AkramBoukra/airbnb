module.exports = (app) => {
    let Reservation = app.models.Reservation;

    function getAll(req, res) {
        Reservation.find({}, (err, reservation) => {
            if (err) {
                res.send(err);
            } else {
                res.send(reservation);
            }
        });
    }

    function getById(req, res) {
        Reservation.findById(req.body.id, function (err, reservation) {
            if (err) {
                res.send(err);
            } else {
                res.send(reservation);
            }
        }).populate({
            path: 'logement',
            select: 'adresse prix titre descrption -_id '
        });
    }

    function create(req, res) {
        Reservation.create(req.body, function (err, reservation) {
            if (err) {
                res.send(err);
            } else {
                res.send(reservation);
            }
        });
    }

    function update(req, res) {
        Reservation.findByIdAndUpdate(req.body.id, req.body, function (err, reservation) {
            if (err) {
                res.send(err);
            } else {
                res.send(reservation);
            }
        });
    }

    function remove(req, res) {
        Reservation.findByIdAndRemove(req.body.id, function (err, reservation) {
            if (err) {
                res.send(err);
            } else {
                res.send(reservation);
            }
        });
    }


    function many(req, res) {
        Reservation.instertMany(arr, function (err, reservations) {
            if (err) {
                res.send(err);
            } else {
                res.send(reservations);
            }

        });
    }

    return { getAll, create, update, getById, remove, many };
};