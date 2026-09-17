import { useState } from 'react'

function Reservas({ carrito, eliminarServicio }) {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [fecha, setFecha] = useState('')
  const [mensaje, setMensaje] = useState('')

  const total = carrito.reduce(
    (acumulado, servicio) =>
      acumulado + servicio.precio,
    0
  )

  function guardarReserva(evento) {
    evento.preventDefault()

    if (carrito.length === 0) {
      setMensaje(
        'Debes agregar al menos un servicio antes de reservar.'
      )
      return
    }

    const nombresServicios = carrito
      .map((servicio) => servicio.nombre)
      .join(', ')

    setMensaje(
      `Reserva confirmada para ${nombre}. ` +
      `Servicios: ${nombresServicios}. ` +
      `Fecha: ${fecha}. ` +
      `Total: $${total.toLocaleString('es-CL')}`
    )
  }

  return (
    <section id="reservas" className="mt-4">
      <div className="card border-warning shadow-sm">

        <div className="card-body">

          <h2 className="card-title mb-4">
            Crea tu cuenta y reserva
          </h2>

          <form onSubmit={guardarReserva}>

            <div className="mb-3">
              <label className="form-label">
                Nombre completo
              </label>

              <input
                type="text"
                className="form-control"
                value={nombre}
                onChange={(evento) =>
                  setNombre(evento.target.value)
                }
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Correo electrónico
              </label>

              <input
                type="email"
                className="form-control"
                value={correo}
                onChange={(evento) =>
                  setCorreo(evento.target.value)
                }
                required
              />
            </div>

            <div className="mb-4">

              <h5>Servicios seleccionados</h5>

              {carrito.length === 0 ? (

                <div className="alert alert-secondary">
                  Aún no has agregado servicios.
                </div>

              ) : (

                <div className="list-group">

                  {carrito.map((servicio) => (

                    <div
                      key={servicio.id}
                      className="
                        list-group-item
                        d-flex
                        justify-content-between
                        align-items-center
                      "
                    >

                      <div>
                        <strong>
                          {servicio.nombre}
                        </strong>

                        <div className="text-secondary small">
                          {servicio.duracion}
                        </div>
                      </div>

                      <div className="d-flex align-items-center gap-3">

                        <strong>
                          ${servicio.precio.toLocaleString('es-CL')}
                        </strong>

                        <button
                          type="button"
                          className="btn btn-outline-danger btn-sm"
                          onClick={() =>
                            eliminarServicio(servicio.id)
                          }
                        >
                          Eliminar
                        </button>

                      </div>

                    </div>

                  ))}

                  <div
                    className="
                      list-group-item
                      d-flex
                      justify-content-between
                      fw-bold
                    "
                  >
                    <span>Total</span>

                    <span>
                      ${total.toLocaleString('es-CL')}
                    </span>
                  </div>

                </div>

              )}

            </div>

            <div className="mb-3">
              <label className="form-label">
                Fecha
              </label>

              <input
                type="date"
                className="form-control"
                value={fecha}
                onChange={(evento) =>
                  setFecha(evento.target.value)
                }
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-warning"
              disabled={carrito.length === 0}
            >
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