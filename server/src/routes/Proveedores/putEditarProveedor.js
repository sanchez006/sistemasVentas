const express = require('express');
const editarProveedorController = require('../../controllers/Proveedores/editarProveedorController')

const putProveedor = express.Router();

putProveedor.put('/proveedores/editarProveedor/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const editProveedor =
    {
      nombre: req.body.nombre,
      direccion: req.body.direccion,
      nit: req.body.nit,
      telefono: req.body.telefono,
      correoElectronico: req.body.correoElectronico
    }
    const result = await editarProveedorController(editProveedor, id)
    res.status(200).send(result);
  } catch (error) {
    console.error("Error al consultar en la base de datos: ", error)
    res.status(500).send("Error del servidor al consultar en la base de datos")
  }
})

module.exports = putProveedor;