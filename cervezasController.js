const cervezasController = {};

cervezasController.list = (req, res) => res.send("Lista de Cervezas");
cervezasController.create = (req, res) =>
  res.send(
    `Creada Cerveza ${req.body.nombre}. Características: ${req.body.descripción}`
  );

module.exports = cervezasController;
