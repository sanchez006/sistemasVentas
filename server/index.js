const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./src/config/dbConfig');
const loginRoute = require('./src/routes/loginRoute')

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());

db.connect((err) => {
  if (err) {
    console.log('Error de conexión a la base de datos');
    return;
  }
  console.log('Conexión a la base de datos exitosa');
});

//USE THE QUERY login.js
app.use(loginRoute);

app.listen(port, () => {
  console.log(`El servidor está corriendo en el puerto: ${port}`);
});