import { useState } from 'react'

function Reservas({ servicios }) {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [servicioElegido, setServicioElegido] = useState('')
  const [fecha, setFecha] = useState('')
  const [mensaje, setMensaje] = useState('')

  function guardarReserva(evento) {
    evento.preventDefault()

    setMensaje(
      'Reserva confirmada para ' +
        nombre +
        '. Servicio: ' +
        servicioElegido +
        '. Fecha: ' +
        fecha
    )
  }

  return (
    <section id="reservas" className="mt-5">
      <div className="card border-warning shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Crea tu cuenta y reserva</h2>

          <form onSubmit={guardarReserva}>
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

            <div className="mb-3">
              <label className="form-label">Servicio</label>

              <select
                className="form-select"
                value={servicioElegido}
                onChange={(evento) => setServicioElegido(evento.target.value)}
                required
              >
                <option value="">Selecciona un servicio</option>

                {servicios.map((servicio) => (
                  <option key={servicio.id} value={servicio.nombre}>
                    {servicio.nombre}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Fecha</label>

              <input
                type="date"
                className="form-control"
                value={fecha}
                onChange={(evento) => setFecha(evento.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-warning">
              Confirmar reserva
            </button>
          </form>

          {mensaje && (
            <div className="alert alert-success mt-3 mb-0">
              {mensaje}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Reservas