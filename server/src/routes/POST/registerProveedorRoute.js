const express = require('express');
const getRegisterProveedor = require('../../controllers/registerProveedor')

const registerProveedorRoute = express();

//USE THE QUERY registerProveedor.js
registerProveedorRoute.post('/proveedores/registrarProveedor', async(req, res) => {
  try {
    const proveedor = req.body;
    const result = await getRegisterProveedor(proveedor)

    res.status(200).send(result);
  }
  catch (error) {
    console.error("Error al consultar en la base de datos: ", error);

    res.status(500).send("Error del servidor al consultar en la base de datos");
  }
});

module.exports = registerProveedorRoute;