const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./src/config/dbConfig');
const loginRoute = require('./src/routes/POST/loginRoute')
const registerRoute = require('./src/routes/POST/registerRoute')
const listarProductos = require('./src/routes/Productos/getListarProductos')
const putProducto = require('./src/routes/Productos/putEditarProducto')
const deleteEliminarProducto = require('./src/routes/Productos/deleteEliminarProducto')
const postRegistrarProveedor = require('./src/routes/Proveedores/postRegistrarProveedor')
const postRegistrarProducto = require('./src/routes/Productos/postRegistrarProducto')
const getListarProveedores = require('./src/routes/Proveedores/getListarProveedores')
const putProveedor = require('./src/routes/Proveedores/putEditarProveedor')
const getListarClientes = require('./src/routes/Clientes/getListarClientes')
const postRegistrarCliente = require('./src/routes/Clientes/postRegistrarCliente')
const putCliente = require('./src/routes/Clientes/putEditarCliente')

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
app.use(postRegistrarProducto);
//USE THE QUERY getListarProductos.js
app.use(listarProductos);
//USE THE QUERY editarProveedorController.js
app.use(putProducto);
//USE THE QUERY eliminarProductoController.js
app.use(deleteEliminarProducto);


//USE THE QUERY registerProveedorController.js
app.use(postRegistrarProveedor);
//USE THE QUERY getListarProveedores.js
app.use(getListarProveedores);
//USE THE QUERY putProveedor.js
app.use(putProveedor);


//USE THE QUERY getListarClientes.js
app.use(getListarClientes);
//USE THE QUERY postRegistrarCliente.js
app.use(postRegistrarCliente);
//USE THE QUERY putEditarCliente.js
app.use(putCliente);

app.listen(port, () => {
  console.log(`El servidor está corriendo en el puerto: ${port}`);
});