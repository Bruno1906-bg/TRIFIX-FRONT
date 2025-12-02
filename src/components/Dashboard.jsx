import Sidebar from './Sidebar'
import Bienvenida from './Bienvenida'
import Buscador from './Buscador'
import ReportesResumen from './ReportesResumen'
import MuroDePeticiones from './MuroDePeticiones'

import './Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <main className="dashboard-main">
        <Buscador />
        <Bienvenida />
        <ReportesResumen />
        <MuroDePeticiones />
      </main>
    </div>
  )
}

export default Dashboard
