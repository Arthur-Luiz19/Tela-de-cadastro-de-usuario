import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Cadastro from './Pages/Cadastro';
import Login from './Pages/Login';
import ListarUsuario from './Pages/Lista';

function App() {

  return (
    <div>
      <BrowserRouter>
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <h1 className="text-2xl font-bold text-center">Sistema de cadastro de usuário</h1>
        </header>
        <Routes>
          <Route path="/" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/listar_usuarios" element={<ListarUsuario />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
