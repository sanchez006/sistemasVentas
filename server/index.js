const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./src/config/dbConfig');
const loginRoute = require('./src/routes/POST/loginRoute')
const registerRoute = require('./src/routes/POST/registerRoute')
const registerProductRoute = require('./src/routes/Productos/postRegistrarProducto')
const registerProveedorRoute = require('./src/routes/POST/registerProveedorRoute')
const listarProductos = require('./src/routes/Productos/getListarProductos')
const putProducto = require('./src/routes/Productos/putEditarProducto')
const editarProductoController = require('./src/controllers/Productos/editarProductoController')

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
//USE THE QUERY register.js
app.use(registerRoute);
//USE THE QUERY registerProductController.js
app.use(registerProductRoute);
//USE THE QUERY registerProveedor.js
app.use(registerProveedorRoute);
//USE THE QUERY getListarProductos.js
app.use(listarProductos);
//USE THE QUERY editarProductoController.js
app.put('/productos/editarProducto/:id', editarProductoController);


app.listen(port, () => {
  console.log(`El servidor está corriendo en el puerto: ${port}`);
});