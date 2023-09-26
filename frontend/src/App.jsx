import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import Registrar from "./pages/Registrar";
import OlvidePassword from "./pages/OlvidePassword";
import NuevoPassword from "./pages/NuevoPassword";
import ConfirmarCuenta from "./pages/ConfirmarCuenta";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout/>}>
          <Route index element={<Login/>}></Route>
          <Route path="registrar" element={<Registrar/>}></Route>
          <Route path="olvide-password" element={<OlvidePassword/>}></Route>
          <Route path="olvide-password/:id" element={<NuevoPassword/>}></Route>
          <Route path="confirmar/:id" element={<ConfirmarCuenta/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
