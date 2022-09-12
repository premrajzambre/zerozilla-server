require("./db/config");
// require("dotenv").config();
var cors = require("cors");
const bodyparser = require("body-parser");

//Import Express
let express = require("express");

//Start App
let app = express();

//Assign port
var port = process.env.PORT || 5003;

app.use(bodyparser.json({ limit: "50mb" }));
app.use(bodyparser.urlencoded({ limit: "50mb", extended: true }));

app.use(cors());

app.use(require("./routes/routes"));

// Welcome message
app.get("/", (req, res) => res.send("Welcome to ZeroZilla"));
app.post("/", (req, res) => res.send("Welcome to ZeroZilla"));
// Launch app to the specified port
app.listen(port, function () {
  console.clear();
  console.log(`Server Running on Port: ${port}`);
});
