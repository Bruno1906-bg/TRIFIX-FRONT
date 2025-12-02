import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {
  const [correo, setCorreo] = useState('')
  const [contraseña, setContraseña] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch('http://localhost:3006/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ correo, contraseña })
      })

      const data = await res.json()

      if (res.ok) {
        alert(data.mensaje)
        // 🔑 Guardar token en localStorage
        localStorage.setItem('token', data.token)
        // Redirigir al perfil
        navigate('/perfil')
      } else {
        alert(data.error || 'Error al iniciar sesión')
      }
    } catch (error) {
      console.error('Error en login:', error)
      alert('Error de conexión con el servidor')
    }
  }

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h1>Iniciar sesión</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="Correo"
            required
          />
          <input
            type="password"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            placeholder="Contraseña"
            required
          />
          <button type="submit">Ingresar</button>
        </form>
        <p>¿No tienes cuenta? <a href="/register">Regístrate</a></p>
      </div>
    </div>
  )
}

export default Login
