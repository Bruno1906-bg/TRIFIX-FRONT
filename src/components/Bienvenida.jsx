import { useNavigate } from 'react-router-dom'
import './Bienvenida.css'

function Bienvenida() {
  const navigate = useNavigate()

  return (
    <div className="bienvenida">
      <h1>Bienvenido</h1>
      <p>Comienza a reportar los problemas que afectan tu entorno de forma rápida y sencilla justo aqui!!!</p>
      <button onClick={() => navigate('/publicar')}>Subir ahora</button>
    </div>
  )
}

export default Bienvenida

