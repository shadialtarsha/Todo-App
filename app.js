const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const todoRoutes = require("./routes/todos");

const port = process.env.PORT || 9000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));

app.use("/api/todos", todoRoutes);

app.get("/", (req, res) => {
    res.sendFile("index.html");
});


app.listen(port, () => {
    console.log(`App is running on port: ${port}`);
});