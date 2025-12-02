import { useState } from 'react'
import './MuroDePeticiones.css'
import img1 from '../assets/agua.jpeg'
import img2 from '../assets/aireacondicionado.jpeg'
import img3 from '../assets/lampara.webp'

function MuroDePeticiones() {
  const [selected, setSelected] = useState(null)

  const peticiones = [
    { 
      texto: 'Tengo una fuga de agua y no se como repararla', 
      usuario: 'JefteGod19', 
      prioridad: 'Alta', 
      fecha: '01/12/2025', 
      ubicacion: { estado: 'Q.Roo', municipio: 'Playa del Carmen', colonia: 'Ejido' },
      imagen: img1,
      fotosExtra: [img1] 
    },
    { 
      texto: 'El aire acondicionado de mi recamara no enfria y le cuesta encender', 
      usuario: 'LuisTable2025', 
      prioridad: 'Media', 
      fecha: '01/12/2025', 
      ubicacion: { estado: 'Q.Roo', municipio: 'Playa del Carmen', colonia: 'Villas del Sol' },
      imagen: img2,
      fotosExtra: [img2] 
    },
    { 
      texto: 'Una lampara de mi habitacion no funciona', 
      usuario: 'OscarMoon-30', 
      prioridad: 'Baja', 
      fecha: '01/12/2025', 
      ubicacion: { estado: 'Q.Roo', municipio: 'Playa del Carmen', colonia: 'Guadalupana' },
      imagen: img3,
      fotosExtra: [img3] 
    }
  ]

  return (
    <section className="muro">
      <h2>Muro De Peticiones</h2>
      {peticiones.map((p, i) => (
        <div key={i} className="peticion">
          <img src={p.imagen} alt={p.texto} className="peticion-img" />
          <div className="peticion-info">
            <p><strong>{p.texto}</strong></p>
            <p>Usuario: {p.usuario} || Prioridad: {p.prioridad}</p>
            <button className="btn-detalles" onClick={() => setSelected(p)}>
              Ver detalles
            </button>
          </div>
        </div>
      ))}

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Detalles de la petición</h3>
            <p><strong>Usuario:</strong> {selected.usuario}</p>
            <p><strong>Prioridad:</strong> {selected.prioridad}</p>
            <p><strong>Descripción:</strong> {selected.texto}</p>
            <p><strong>Fecha:</strong> {selected.fecha}</p>

            <div className="ubicacion-lista">
              <p><strong>Ubicación:</strong></p>
              <ul>
                <li>Estado: {selected.ubicacion.estado}</li>
                <li>Municipio: {selected.ubicacion.municipio}</li>
                <li>Colonia: {selected.ubicacion.colonia}</li>
              </ul>
            </div>

            <div className="modal-fotos">
              <h4>Fotos adicionales</h4>
              {selected.fotosExtra.map((foto, idx) => (
                <img key={idx} src={foto} alt="extra" />
              ))}
            </div>

            <button className="btn-cerrar" onClick={() => setSelected(null)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default MuroDePeticiones
