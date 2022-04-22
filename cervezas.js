var router = require("express").Router();
router.get("/search", (req, res) => {
  res.json({ message: `Vas a buscar una cerveza que contiene ${req.query.q}` });
}); // ¡¡¡¡antes que la ruta GET /:id!!!!
router.get("/", (req, res) => {
  res.json({ message: "Estás conectado a la API. Recurso: cervezas" });
});
router.get("/:id", (req, res) => {
  res.json({ message: `Vas a obtener la cerveza con id ${req.params.id}` });
});
router.post("/", (req, res) => {
  res.json({ message: "Vas a añadir una cerveza" });
});
router.put("/:id", (req, res) => {
  res.json({ message: `Vas a actualizar la cerveza con id ${req.params.id}` });
});
router.delete("/:id", (req, res) => {
  res.json({ message: `Vas a borrar la cerveza con id ${req.params.id}` });
});
module.exports = router;
