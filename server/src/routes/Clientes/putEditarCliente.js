const express = require('express')
const editarClienteController = require('../../controllers/Clientes/editarClienteController')

const putCliente = express.Router();

putCliente.put('/clientes/editarCliente/:id', async (req, res) => {
  try{
    const {id} = req.params;
    const editCliente = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      nit: req.body.nit,
      direccion: req.body.direccion
    }
    const result = await editarClienteController(editCliente, id)
    res.status(200).send(result);
  } catch (error) {
    console.error("Error al consultar en la base de datos: ", error);
    res.status(500).send("Error del servidor al consultar en la base de datos");
  }
})

module.exports = putCliente;

