const mongoose = require("mongoose");

module.exports = (app) => {
    mongoose.connect(
        "mongodb://localhost:27017/spotify", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("tu as reussi  t'est trop genial on t'aime");
            }
        }
    )
};