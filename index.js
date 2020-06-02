const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser');
app.use(bodyParser.json());

require("./database")(app);
require("./controllers")(app);
require("./routes")(app);











app.listen(port, () => console.log("Example app listening on port port!"))