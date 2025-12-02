import { Link } from 'react-router-dom'
import './Sidebar.css'

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className='Title'>TriFix</h2>

      <nav>
        <ul>
          <li><Link to="/perfil" className="sidebar-link">■ Mi Perfil</Link></li>
          <li>■ Mis Reportes</li>
          <li>■ Configuración</li>
        </ul>
      </nav>

      <nav>
        <ul>
          <h2>Técnicos activos</h2>
          <li>■ Pepe: Carpintería y Hojalatería</li>
          <li>■ Juan: Plomería y pintura</li>
          <li>■ Fidel: Mantenimiento general</li>
          <li><Link to="/perfiles-tecnicos" className="sidebar-link">■ Consultar Técnicos</Link></li>
        </ul>
      </nav>

      <nav>
        <Link to="/dashboard" className="sidebar-link">■ Volver al Dashboard</Link>
      </nav>
    </aside>
  )
}

export default Sidebar
