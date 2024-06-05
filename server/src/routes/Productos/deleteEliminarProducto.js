//deleteElminarProducto.js
const express = require('express')
const eliminarProductoController = require('../../controllers/Productos/eliminarProductoController')

const deleteEliminarProducto = express();

//USE THE QUERY eliminarProductoController.js
deleteEliminarProducto.delete('/productos/eliminarProducto/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const result = await eliminarProductoController(id)

    res.status(200).send(result);
  }
  catch (error) {
    console.error("Error al consultar en la base de datos: ", error);

    res.status(500).send("Error del servidor al consultar en la base de datos");
  }
})

module.exports = deleteEliminarProducto;