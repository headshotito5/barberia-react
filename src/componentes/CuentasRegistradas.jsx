import { useState } from 'react'

function CuentasRegistradas({ alAutenticar, alCerrar }) {
  const [modoRegistro, setModoRegistro] = useState(true)
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [clave, setClave] = useState('')
  const [error, setError] = useState('')

  function procesarFormulario(e) {
    e.preventDefault()
    setError('')
    
    let usuarioActual = { nombre, correo, clave }
    
    if (modoRegistro) {
      localStorage.setItem(correo, JSON.stringify(usuarioActual))
      localStorage.setItem('sesionActiva', JSON.stringify(usuarioActual))
    } else {
      const guardado = localStorage.getItem(correo)
      if (guardado) {
        const datos = JSON.parse(guardado)
        if (datos.clave === clave) {
          usuarioActual = datos
          localStorage.setItem('sesionActiva', JSON.stringify(usuarioActual))
        } else {
          setError('Contraseña incorrecta')
          return
        }
      } else {
        setError('Usuario no encontrado. Por favor regístrate.')
        return
      }
    }
    alAutenticar(usuarioActual)
  }

  return (
    <div className="card border-warning shadow-sm mb-5">
      <div className="card-body p-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold">{modoRegistro ? 'Crear Cuenta' : 'Iniciar Sesión'}</h2>
          <button type="button" className="btn-close" onClick={alCerrar}></button>
        </div>
        
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={procesarFormulario}>
          {modoRegistro && (
            <div className="mb-3">
              <label className="form-label">Nombre completo</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ej: Juan Alberto Quiñonez"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>
          )}

          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              placeholder="alvertito444@gmail.com"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              value={clave}
              onChange={(e) => setClave(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-warning w-100 fw-bold mb-3">
            {modoRegistro ? 'Registrarse' : 'Ingresar'}
          </button>
        </form>

        <div className="text-center">
          <button
            type="button"
            className="btn btn-link text-dark text-decoration-none"
            onClick={() => {
              setModoRegistro(!modoRegistro)
              setError('')
            }}
          >
            {modoRegistro ? '¿Ya tienes cuenta? Inicia sesión' : '¿No tienes cuenta? Regístrate'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CuentasRegistradas