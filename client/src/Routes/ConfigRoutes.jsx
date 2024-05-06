import {Routes, Route} from 'react-router-dom';
import { UserLogin } from "../Login/UserLogin.jsx";
import {RegisterUser} from "../Register/RegisterUser.jsx";

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