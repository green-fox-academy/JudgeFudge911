const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use("/assets", express.static(path.join(__dirname, "/assets")));

app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "/assets/index.html"));
});

app.post("/signup", (req, res) =>{
    console.log(req.body);

    res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`);
});
