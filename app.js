const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./config/routes");
const app = express();
const db = require("./app/models");
const PORT = process.env.PORT || 5000;

db.sequelize.sync();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to tictactoe backend API application." });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

