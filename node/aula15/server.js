require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.emit("pronto");
  })
  .catch((e) =>
    app.get((req, res) => {
      res.send(`Problema de conexão à base de dados`);
    })
  );

const session = require('express-session');
const MongoStore = new require('connect-mongo');
const flash = require('connect-flash');

const path = require("path");
const routes = require("./routes");
const { middleWareGlobal } = require("./src/middlewares/middleware");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(middleWareGlobal);
app.use(routes);

app.on("pronto", () =>
  app.listen(3000, () => {
    console.log("Server inicializado na porta 3000");
    console.log("Para vizualisar, acesse http://localhost:3000");
  })
);
