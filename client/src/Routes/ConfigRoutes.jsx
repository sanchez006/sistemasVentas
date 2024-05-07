import {Routes, Route} from 'react-router-dom';
import { UserLogin } from "../pages/Login/UserLogin.jsx";
import {RegisterUser} from "../pages/Register/RegisterUser.jsx";

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
      </Routes>
  )
}