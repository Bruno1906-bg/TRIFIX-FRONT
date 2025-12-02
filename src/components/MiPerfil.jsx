import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import Sidebar from './Sidebar'
import './MiPerfil.css'
import miFoto from '../assets/miperfil.jpg'

function MiPerfil() {
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [usuario, setUsuario] = useState(null)
  const [editForm, setEditForm] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    ubicacion: '',
    nuevaContraseña: '',
    confirmarContraseña: ''
  })

  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) return

    const decoded = jwtDecode(token)
    const userId = decoded.id

    fetch(`http://localhost:3006/perfil/${userId}`)
      .then(res => res.json())
      .then(data => {
        setUsuario({
          foto: miFoto,
          nombre: data.nombre,
          apellido: data.apellido,
          correo: data.correo,
          telefono: data.telefono,
          ubicacion: data.ubicacion,
          contraseña: '********'
        })

        setEditForm((prev) => ({
          ...prev,
          nombre: data.nombre,
          apellido: data.apellido,
          correo: data.correo,
          telefono: data.telefono,
          ubicacion: data.ubicacion
        }))
      })
      .catch(err => console.error('Error al obtener perfil:', err))
  }, [])

  const handleEditSubmit = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem('token')
    if (!token) return

    const decoded = jwtDecode(token)
    const userId = decoded.id

    if (editForm.nuevaContraseña && editForm.nuevaContraseña !== editForm.confirmarContraseña) {
      alert('Las contraseñas nuevas no coinciden')
      return
    }

    try {
      const res = await fetch(`http://localhost:3006/perfil/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: editForm.nombre,
          apellido: editForm.apellido,
          correo: editForm.correo,
          telefono: editForm.telefono,
          ubicacion: editForm.ubicacion,
          nuevaContraseña: editForm.nuevaContraseña || null
        })
      })

      const data = await res.json()

      if (res.ok) {
        alert(data.mensaje)
        setUsuario((prev) => ({
          ...prev,
          nombre: editForm.nombre,
          apellido: editForm.apellido,
          correo: editForm.correo,
          telefono: editForm.telefono,
          ubicacion: editForm.ubicacion
        }))
        setShowEditModal(false)
      } else {
        alert(data.error || 'Error al actualizar perfil')
      }
    } catch (error) {
      console.error('Error al editar perfil:', error)
      alert('Error de conexión con el servidor')
    }
  }

  const handleConfirmDelete = () => {
    const token = localStorage.getItem('token')
    if (!token || !usuario) return

    const decoded = jwtDecode(token)
    const userId = decoded.id

    fetch(`http://localhost:3006/perfil/${userId}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        alert(data.mensaje)
        localStorage.removeItem('token')
        navigate('/register')
      })
      .catch(err => console.error('Error al eliminar perfil:', err))
  }

  if (!usuario) return <p>Cargando perfil...</p>

  return (
    <div className="perfil-layout">
      <Sidebar />
      <div className="perfil-content">
        <div className="perfil-banner">
          <h1>Mi Perfil</h1>
        </div>

        <form className="perfil-form">
          <div className="perfil-foto-container">
            <img src={usuario.foto} alt={usuario.nombre} className="perfil-foto" />
          </div>

          <label>
            Nombre:
            <input type="text" value={usuario.nombre} readOnly />
          </label>

          <label>
            Apellido:
            <input type="text" value={usuario.apellido} readOnly />
          </label>

          <label>
            Correo:
            <input type="email" value={usuario.correo} readOnly />
          </label>

          <label>
            Teléfono:
            <input type="text" value={usuario.telefono} readOnly />
          </label>

          <label>
            Ubicación:
            <input type="text" value={usuario.ubicacion} readOnly />
          </label>

          <label>
            Contraseña:
            <input type="password" value={usuario.contraseña} readOnly />
          </label>

          <div className="perfil-actions">
            <button type="button" className="btn-general" onClick={() => setShowEditModal(true)}>
              Editar perfil
            </button>
            <button type="button" className="btn-eliminar" onClick={() => setShowDeleteModal(true)}>
              Eliminar perfil
            </button>
          </div>
        </form>

        {showEditModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h2>Editar perfil</h2>
              <form className="modal-form two-columns" onSubmit={handleEditSubmit}>
                <label>
                  Nombre:
                  <input
                    type="text"
                    value={editForm.nombre}
                    onChange={(e) => setEditForm({ ...editForm, nombre: e.target.value })}
                  />
                </label>
                <label>
                  Apellido:
                  <input
                    type="text"
                    value={editForm.apellido}
                    onChange={(e) => setEditForm({ ...editForm, apellido: e.target.value })}
                  />
                </label>
                <label>
                  Correo:
                  <input
                    type="email"
                    value={editForm.correo}
                    onChange={(e) => setEditForm({ ...editForm, correo: e.target.value })}
                  />
                </label>
                <label>
                  Teléfono:
                  <input
                    type="text"
                    value={editForm.telefono}
                    onChange={(e) => setEditForm({ ...editForm, telefono: e.target.value })}
                  />
                </label>
                <label>
                  Ubicación:
                  <input
                    type="text"
                    value={editForm.ubicacion}
                    onChange={(e) => setEditForm({ ...editForm, ubicacion: e.target.value })}
                  />
                </label>

                <hr />
                <h3>Cambiar contraseña</h3>
                <label>
                  Nueva contraseña:
                  <input
                    type="password"
                    value={editForm.nuevaContraseña}
                    onChange={(e) => setEditForm({ ...editForm, nuevaContraseña: e.target.value })}
                    placeholder="Ingresa nueva contraseña"
                  />
                </label>
                <label>
                  Confirmar nueva contraseña:
                  <input
                    type="password"
                    value={editForm.confirmarContraseña}
                    onChange={(e) => setEditForm({ ...editForm, confirmarContraseña: e.target.value })}
                    placeholder="Confirma nueva contraseña"
                  />
                </label>

                <div className="modal-actions">
                  <button type="button" onClick={() => setShowEditModal(false)}>Cancelar</button>
                  <button type="submit">Guardar cambios</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {showDeleteModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h2>¿Estás seguro que quieres eliminar tu perfil?</h2>
              <div className="modal-actions">
                <button type="button" onClick={() => setShowDeleteModal(false)}>Cancelar</button>
                <button type="button" className="btn-confirm" onClick={handleConfirmDelete}>Confirmar</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MiPerfil

