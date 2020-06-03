const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
app.use(bodyParser.json());
app.use(jwt.json());


require("./database")(app);
require("./models")(app);
require("./controllers")(app);
require("./routes")(app);




app.listen(port, () => console.log("Example app listening on port port!"))