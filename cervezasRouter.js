const router = require("express").Router();
const cervezasController = require("./cervezasController");

/*
router.get("/", (req, res) => res.json({ mensaje: "Listado de cervezas" }));

router.post("/", (req, res) => {
  res.json({ mensaje: "Cerveza guardada" });
});

router.delete("/", (req, res) => {
  res.json({ mensaje: "Cerveza borrada" });
});
*/

router.get("/", (req, res) => cervezasController.list(req, res));

router.post("/", (req, res) => cervezasController.create(req, res));

router.delete("/", (req, res) => cervezasController.remove(req, res));

// Exportacion de "router" para ser importado desde "index.js"
module.exports = router;
