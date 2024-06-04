//putEditarProducto.js es el encargado de manejar la ruta para editar un producto en la base de datos
const express = require('express')
const editarProducto = require('../../controllers/Productos/editarProductoController')

const putProducto = express.Router();

//USE THE QUERY editarProductoController.js
putProducto.put('/productos/editarProducto/:id', async(req, res) => {
  try {
    const productId = req.params.id;
    const product = req.body;
    product.id = productId;
    const result = await editarProducto(product)

    res.status(200).send(result);
  }
  catch (error) {
    console.error("Error al consultar en la base de datos: ", error);

    res.status(500).send("Error del servidor al consultar en la base de datos");
  }
})

module.exports = putProducto;
