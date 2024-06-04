//putEditarProducto.js es el encargado de manejar la ruta para editar un producto en la base de datos
const express = require('express')
const editarProductoController = require('../../controllers/Productos/editarProductoController')

const putProducto = express.Router();

//USE THE QUERY editarProductoController.js
putProducto.put('/productos/editarProducto/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const editProducto =
    {
      nombre: req.body.nombre,
      codigo: req.body.codigo,
      precio: req.body.precio,
      descripcion: req.body.descripcion
    }
    const result = await editarProductoController(editProducto, id)

    res.status(200).send(result);
  }
  catch (error) {
    console.error("Error al consultar en la base de datos: ", error);

    res.status(500).send("Error del servidor al consultar en la base de datos");
  }
})

module.exports = putProducto;
