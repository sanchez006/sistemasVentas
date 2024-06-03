const express = require('express')
const getListarProductos = require('../../controllers/Productos/listarProductosController')

const listarProductos = express();

//USE THE QUERY listarProductosController.js
listarProductos.get('/productos/listarProductos', async(req, res) => {
  try {
    const result = await getListarProductos()

    res.status(200).send(result);
  }
  catch (error) {
    console.error("Error al consultar en la base de datos: ", error);

    res.status(500).send("Error del servidor al consultar en la base de datos");
  }
});

module.exports = listarProductos;