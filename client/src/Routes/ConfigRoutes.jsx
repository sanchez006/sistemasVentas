import {Routes, Route} from 'react-router-dom';
import { UserLogin } from "../Login/UserLogin.jsx";

export const Routes = () => {
  return (
      <Routes>
        <Route
            path="/"
            element={<UserLogin/>}
        />
      </Routes>
  )
}