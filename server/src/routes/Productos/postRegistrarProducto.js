const express = require('express');
const getRegisterProduct = require('../../controllers/Productos/registerProductController')

const postRegistrarProducto = express();

//USE THE QUERY registerProductController.js
postRegistrarProducto.post('/productos/registrarProductos', async(req, res) => {
  try {
    const product = req.body;
    const result = await getRegisterProduct(product)

    res.status(200).send(result);
  }
  catch (error) {
    console.error("Error al consultar en la base de datos: ", error);

    res.status(500).send("Error del servidor al consultar en la base de datos");
  }
});

module.exports = postRegistrarProducto;