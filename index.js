/*
PUNTO DE PARTIDA

const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hola Mundo");
});
app.listen(3000);

*/

const express = require("express");
const cervezasRouter = require("./cervezasRouter.js");
const app = express();
const path = require("path");
const staticRoute = path.join(__dirname, "public");

app.use((req, res, next) => {
  const now = new Date().toString();
  console.log(`${now} ${req.method} ${req.url}`);
  next();
});

app.use("/static", express.static(staticRoute));

app.use("/cervezas", cervezasRouter);

// Ver imagen "localhost-3000.png"
app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

// Ver imagen "localhost-3000-Bancos.png"
app.get("/bancos", (req, res) => {
  res.send("Aquí deberían aparecer los bancos");
});

// Ver imagen "localhost-3000-Contactar.png"
app.get("/contactar", (req, res) => {
  res.send("Página a Contactar");
});

app.listen(3000);
