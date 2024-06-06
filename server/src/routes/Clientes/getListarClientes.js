const express = require('express')
const listarClientes = require('../../controllers/Clientes/listarClientesController')
const getListarClientes = express.Router();

getListarClientes.get('/clientes/listarClientes', async(req, res) => {
  try {
    const result = await listarClientes()
    res.status(200).send(result);
  } catch (error) {
    console.error("Error al consultar en la base de datos: ", error);
    res.status(500).send("Error del servidor al consultar en la base de datos");
  }
})

module.exports = getListarClientes;
