const express = require('express');
const listarProveedores = require('../../controllers/Proveedores/listarProveedoresController')

const getListarProveedores = express();

//USE THE QUERY listarProveedoresController.js
getListarProveedores.get('/proveedores/listarProveedores', async(req, res) => {
  try {
    const result = await listarProveedores()

    res.status(200).send(result);
  } catch (error) {
    console.error("Error al consultar en la base de datos: ", error);
    res.status(500).send("Error del servidor al consultar en la base de datos");
  }
})

module.exports = getListarProveedores