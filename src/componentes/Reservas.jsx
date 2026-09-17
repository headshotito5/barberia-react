import { useState, useEffect } from 'react'

function Reservas({ carrito = [], eliminarServicio, usuario }) {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [fecha, setFecha] = useState('')
  const [mensaje, setMensaje] = useState('')

  useEffect(() => {
    if (usuario) {
      setNombre(usuario.nombre || '')
      setCorreo(usuario.correo || '')
    } else {
      setNombre('')
      setCorreo('')
    }
  }, [usuario])

  const listaCarrito = carrito || []
  const total = listaCarrito.reduce((acumulado, servicio) => acumulado + servicio.precio, 0)

  function guardarReserva(evento) {
    evento.preventDefault()

    if (listaCarrito.length === 0) {
      setMensaje('Debes agregar al menos un servicio antes de reservar.')
      return
    }

    const nombresServicios = listaCarrito.map((servicio) => servicio.nombre).join(', ')
    const textoReserva = `Reserva confirmada para ${nombre}. Servicios: ${nombresServicios}. Fecha: ${fecha}. Total: $${total.toLocaleString('es-CL')}`
    
    setMensaje(textoReserva)

    setTimeout(() => {
      const asunto = encodeURIComponent('Confirmación de Reserva - Urban Style')
      const cuerpo = encodeURIComponent(`Hola ${nombre},\n\nTu reserva ha sido ingresada con éxito.\n\nDetalles:\n- Servicios: ${nombresServicios}\n- Fecha: ${fecha}\n- Total a pagar: $${total.toLocaleString('es-CL')}\n\n¡Te esperamos en nuestro local!`)
      window.location.href = `mailto:${correo}?subject=${asunto}&body=${cuerpo}`
    }, 1500)
  }

  return (
    <section id="reservas" className="mt-4">
      <div className="card border-warning shadow-sm">
        <div className="card-body p-4">
          <h2 className="card-title mb-4">Finaliza tu reserva</h2>
          <form onSubmit={guardarReserva}>
            <div className="mb-3">
              <label className="form-label">Nombre completo</label>
              <input
                type="text"
                className="form-control"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                readOnly={!!usuario}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Correo electrónico</label>
              <input
                type="email"
                className="form-control"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                readOnly={!!usuario}
                required
              />
            </div>

            <div className="mb-4">
              <h5>Servicios seleccionados</h5>
              {listaCarrito.length === 0 ? (
                <div className="alert alert-secondary">Aún no has agregado servicios.</div>
              ) : (
                <div className="list-group">
                  {listaCarrito.map((servicio) => (
                    <div key={servicio.id} className="list-group-item d-flex justify-content-between align-items-center">
                      <div>
                        <strong>{servicio.nombre}</strong>
                        <div className="text-secondary small">{servicio.duracion}</div>
                      </div>
                      <div className="d-flex align-items-center gap-3">
                        <strong>${servicio.precio.toLocaleString('es-CL')}</strong>
                        <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => eliminarServicio(servicio.id)}>
                          Eliminar
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="list-group-item d-flex justify-content-between fw-bold bg-light">
                    <span>Total</span>
                    <span>${total.toLocaleString('es-CL')}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="mb-4">
              <label className="form-label">Fecha de atención</label>
              <input
                type="date"
                className="form-control"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-warning w-100 fw-bold" disabled={listaCarrito.length === 0}>
              Confirmar reserva
            </button>
          </form>

          {mensaje && (
            <div className="alert alert-success mt-4 mb-0 fw-bold">
              {mensaje}
              <br/><small className="fw-normal">El comprobante ha sido enviado a tu correo electrónico.</small>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Reservas