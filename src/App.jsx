import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import PerfilesTecnicos from './components/PerfilesTecnicos'
import Login from './components/Login'
import Register from './components/Register'
import Publicar from './components/Publicar'
import Bienvenida from './components/Bienvenida'
import MuroDePeticiones from './components/MuroDePeticiones'
import MiPerfil from './components/MiPerfil'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/publicar" element={<Publicar />} />
        <Route path="/muro" element={<MuroDePeticiones />} />
        <Route path="/bienvenida" element={<Bienvenida />} />
        <Route path="/perfiles-tecnicos" element={<PerfilesTecnicos />} />
        <Route path="/perfil" element={<MiPerfil />} />
      </Routes>
    </Router>
  )
}

export default App

