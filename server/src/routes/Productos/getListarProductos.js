const express = require('express')
const listarProductos = require('../../controllers/Productos/listarProductosController')

const getListarProductos = express();

//USE THE QUERY listarProductosController.js
getListarProductos.get('/productos/listarProductos', async(req, res) => {
  try {
    const result = await listarProductos()

    res.status(200).send(result);
  }
  catch (error) {
    console.error("Error al consultar en la base de datos: ", error);

    res.status(500).send("Error del servidor al consultar en la base de datos");
  }
});

module.exports = getListarProductos;