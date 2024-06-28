const express = require('express')
const getRegistrarCliente = require('../../controllers/Clientes/registrarClienteController')

const postRegistrarCliente = express();

postRegistrarCliente.post('/clientes/registrarCliente', async(req, res) => {
  try {
    const cliente = req.body;
    const result = await getRegistrarCliente(cliente);

    res.status(200).send(result);
  } catch (error) {
    console.error("Error al consultar en la base de datos: ", error);

    res.status(500).send("Error del servidor al consultar en la base de datos");
  }
})

module.exports = postRegistrarCliente;
