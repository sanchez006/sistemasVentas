const express = require('express');
const { getLoginUser } = require('../../controllers/login');


const loginRoute = express();

//USE THE QUERY login.js
loginRoute.post('/login', async(req, res) => {
  try {
    const user = req.body;
    const result = await getLoginUser(user)

    res.status(200).send(result);
  }
  catch (error) {
    console.error("Error al consultar en la base de datos: ", error);

    res.status(500).send("Error del servidor al consultar en la base de datos");
  }
});

module.exports = loginRoute;