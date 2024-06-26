//registerRoute.js
const express = require('express');
const getRegisterUser = require('../../controllers/register')

const registerRoute = express();

//USE THE QUERY register.js
registerRoute.post('/register', async(req, res) => {
  try {
    const user = req.body;
    const result = await getRegisterUser(user)

    res.status(200).send(result);
  }
  catch (error) {
    console.error("Error al consultar en la base de datos: ", error);

    res.status(500).send("Error del servidor al consultar en la base de datos");
  }
});

module.exports = registerRoute;

