//ConfigRoutes.jsx
import {Routes, Route} from 'react-router-dom';
import { UserLogin } from "../pages/UserLogin.jsx";
import {RegisterUser} from "../pages/RegisterUser.jsx";
import { Producto } from '../pages/Producto.jsx'
import { Proveedores } from '../pages/Proveedores.jsx'
import { Clientes } from '../pages/Clientes.jsx'
import { Pedidos } from '../pages/Pedidos/Pedidos.jsx'

export const ConfigRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<UserLogin/>}
      />
      <Route
        path="/register"
        element={<RegisterUser/>}
      />
      <Route
        path="/productos"
        element={<Producto/>}
      />
      <Route
        path="/productos/registrarProductos"
        element={<Producto/>}
      />
      <Route
        path="/productos/listarProductos"
        element={<Producto/>}
      />
      <Route
        path="/productos/editarProducto/:id"
        element={<Producto/>}
      />
      <Route
        path="/productos/eliminarProducto"
        element={<Producto/>}
      />
      <Route
        path="/proveedores"
        element={<Proveedores/>}
      />
      <Route
        path="/proveedores/registrarProveedor"
        element={<Proveedores/>}
      />
        <Route
        path="/proveedores/editarProveedor/:id"
        element={<Proveedores/>}
      />
      <Route
        path="/clientes"
        element={<Clientes/>}
      />
        <Route
        path="/clientes/registrarCliente"
        element={<Clientes/>}
      />
        <Route
        path="/clientes/editarCliente/:id"
        element={<Clientes/>}
      />

      <Route
        path="/pedidos"
        element={<Pedidos/>}
      />
        <Route
        path="/pedidos/registrarPedido"
        element={<Pedidos/>}
      />
    </Routes>
  )
}
