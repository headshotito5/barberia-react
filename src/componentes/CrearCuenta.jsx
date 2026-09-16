import { useState } from 'react'

function CrearCuenta({ alCrearCuenta }) {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [contrasena, setContrasena] = useState('')

  function manejarEnvio(evento) {
    evento.preventDefault()

    alCrearCuenta({
      nombre: nombre,
      correo: correo,
    })
  }

  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card border-warning shadow-sm">
            <div className="card-body p-4">
              <h1 className="h3 text-center mb-3">
                Crea tu cuenta
              </h1>

              <p className="text-secondary text-center mb-4">
                Regístrate para reservar tu próxima hora.
              </p>

              <form onSubmit={manejarEnvio}>
                <div className="mb-3">
                  <label className="form-label">Nombre completo</label>

                  <input
                    type="text"
                    className="form-control"
                    value={nombre}
                    onChange={(evento) => setNombre(evento.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Correo electrónico</label>

                  <input
                    type="email"
                    className="form-control"
                    value={correo}
                    onChange={(evento) => setCorreo(evento.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Contraseña</label>

                  <input
                    type="password"
                    className="form-control"
                    value={contrasena}
                    onChange={(evento) => setContrasena(evento.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-warning w-100">
                  Crear cuenta
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CrearCuenta