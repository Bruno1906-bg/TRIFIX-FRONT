import { useState } from 'react'
import Sidebar from './Sidebar'
import './Publicar.css'

function Publicar() {
  const [titulo, setTitulo] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [prioridad, setPrioridad] = useState('media')
  const [estado, setEstado] = useState('')
  const [municipio, setMunicipio] = useState('')
  const [colonia, setColonia] = useState('')
  const [archivos, setArchivos] = useState([])

  const handleFileChange = (e) => {
    setArchivos(Array.from(e.target.files))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Publicación simulada:', {
      titulo,
      descripcion,
      prioridad,
      estado,
      municipio,
      colonia,
      archivos
    })
    alert('Publicación simulada (sin conexión)')
    setTitulo('')
    setDescripcion('')
    setPrioridad('media')
    setEstado('')
    setMunicipio('')
    setColonia('')
    setArchivos([])
  }

  return (
    <div className="publicar-layout">
      <Sidebar />
      <div className="publicar-content">
        <div className="publicar-wrapper">
          <h2 className="publicar-titulo">Realiza tus publicaciones</h2>
          <form className="publicar-form" onSubmit={handleSubmit}>
            <label>
              Título:
              <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
            </label>

            <label>
              Descripción detallada:
              <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
            </label>

            <label>
              Selecciona prioridad:
              <select value={prioridad} onChange={(e) => setPrioridad(e.target.value)}>
                <option value="baja">Baja</option>
                <option value="media">Media</option>
                <option value="alta">Alta</option>
              </select>
            </label>

            <label>
              Estado:
              <input type="text" value={estado} onChange={(e) => setEstado(e.target.value)} required />
            </label>

            <label>
              Municipio:
              <input type="text" value={municipio} onChange={(e) => setMunicipio(e.target.value)} required />
            </label>

            <label>
              Colonia:
              <input type="text" value={colonia} onChange={(e) => setColonia(e.target.value)} required />
            </label>

            <label>
              Sube aquí tus evidencias:
              <input type="file" multiple onChange={handleFileChange} />
              <p>{archivos.length > 0 ? `${archivos.length} archivo(s) seleccionado(s)` : 'Sin archivos seleccionados'}</p>
            </label>

            <button type="submit" className="btn-publicar">Publicar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Publicar
