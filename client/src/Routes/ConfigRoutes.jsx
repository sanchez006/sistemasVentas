import {Routes, Route} from 'react-router-dom';
import { UserLogin } from "../pages/UserLogin.jsx";
import {RegisterUser} from "../pages/RegisterUser.jsx";
import { Producto } from '../pages/Producto.jsx'
import { Proveedores } from '../pages/Proveedores.jsx'
import { Clientes } from '../pages/Clientes.jsx'

export const ConfigRoutes = () => {
  return (
      <Routes>
        <Route
            path="/"
            element={<UserLogin/>}
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
            path="/register"
            element={<RegisterUser/>}
        />
        <Route
          path="/proveedores"
          element={<Proveedores/>}
        />
        <Route
          path="proveedores/registrarProveedor"
          element={<Proveedores/>}
        />
        <Route
          path="clientes"
          element={<Clientes/>}
        />
      </Routes>
  )
}