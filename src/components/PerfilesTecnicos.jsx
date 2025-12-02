import Sidebar from './Sidebar'
import './PerfilesTecnicos.css'

// Importa las imágenes desde assets
import senor1 from '../assets/señor1.jpeg'
import senor2 from '../assets/señor2.jpeg'
import senor3 from '../assets/señor3.jpeg'

function PerfilesTecnicos() {
  const tecnicos = [
    {
      foto: senor1,
      nombre: 'Pepe Pérez',
      edad: 35,
      preparacion: 'Carpintería y Hojalatería',
      area: 'Reparaciones estructurales',
      estado: 'Disponible',
      ubicacion: 'Playa del Carmen, Q. Roo',
      reseñas: [
        'Muy puntual y profesional.',
        'Excelente trabajo en carpintería.'
      ]
    },
    {
      foto: senor2,
      nombre: 'Juan López',
      edad: 40,
      preparacion: 'Plomería y Pintura',
      area: 'Mantenimiento de tuberías y acabados',
      estado: 'Ocupado',
      ubicacion: 'Cancún, Q. Roo',
      reseñas: [
        'Resolvió rápido una fuga de agua.',
        'Buen trato y atención al detalle.'
      ]
    },
    {
      foto: senor3,
      nombre: 'Fidel García',
      edad: 45,
      preparacion: 'Mantenimiento general',
      area: 'Servicios múltiples',
      estado: 'Disponible',
      ubicacion: 'Cozumel, Q. Roo',
      reseñas: [
        'Versátil y confiable.',
        'Siempre dispuesto a ayudar.'
      ]
    }
  ]

  const handleMessageClick = (nombre) => {
    alert(`Enviar mensaje a ${nombre}`)
    // Aquí podrías abrir un modal o redirigir a un chat
  }

  return (
    <div className="perfiles-layout">
      <Sidebar />
      <div className="perfiles-content">
        <div className="perfiles-banner">
          <h1>Perfiles de Técnicos</h1>
        </div>

        <div className="perfiles-grid">
          {tecnicos.map((tecnico, index) => (
            <div key={index} className="perfil-card">
              <img src={tecnico.foto} alt={tecnico.nombre} className="perfil-foto" />
              <h2>{tecnico.nombre}</h2>
              <p><strong>Edad:</strong> {tecnico.edad}</p>
              <p><strong>Preparación:</strong> {tecnico.preparacion}</p>
              <p><strong>Área:</strong> {tecnico.area}</p>
              <p><strong>Estado:</strong> {tecnico.estado}</p>
              <p><strong>Ubicación:</strong> {tecnico.ubicacion}</p>
              <div className="perfil-reseñas">
                <strong>Reseñas:</strong>
                <ul>
                  {tecnico.reseñas.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
              <button 
                className="btn-mensaje" 
                onClick={() => handleMessageClick(tecnico.nombre)}
              >
                Enviar mensaje
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PerfilesTecnicos

