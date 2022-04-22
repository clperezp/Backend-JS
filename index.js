/*
PUNTO DE PARTIDA

const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hola Mundo");
});
app.listen(3000);

*/

// DEPENDENCIAS
const express = require("express");
const cervezasRouter = require("./cervezasRouter.js");
const Cerveza = require("./cervezasModel");
const app = express();
const path = require("path");
require("./db");
const staticRoute = path.join(__dirname, "public");
const bodyParser = require("body-parser");

// MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  const now = new Date().toString();
  console.log(`${now} ${req.method} ${req.url}`);
  next();
});

app.use("/static", express.static(staticRoute));

app.use("/api/cervezas", cervezasRouter);

// RUTAS Y ENRUTADORES
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

// app.listen(3000);
// console.log("Server running on port 3000");

app.listen(3000, function () {
  console.log("Example app listening on port 3000");
});
// console.log("Escuchando en el puerto 3000");

/*
const miCerveza = new Cerveza({
  nombre: "Ambar",
  descripción: "La cerveza de nuestra tierra",
  graduación: "4,8º",
  envase: "Botella de 75cl",
  precio: "300€",
});
miCerveza.save((err, miCerveza) => {
  if (err) return console.error(err);
  console.log(`Guardada en bbdd ${miCerveza.nombre}`);
});
*/
