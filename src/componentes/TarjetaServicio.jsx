function TarjetaServicio({ servicio }) {
  function reservarServicio() {
    alert('Seleccionaste: ' + servicio.nombre)
  }

  return (
    <div className="card shadow-sm border-warning">
      <div className="card-body">
        <span className="badge bg-dark text-warning">
          {servicio.categoria}
        </span>

        <h5 className="card-title mt-3">
          {servicio.nombre}
        </h5>

        <p className="card-text text-secondary">
          {servicio.descripcion}
        </p>

        <p>
          <strong>Duración aproximada:</strong> {servicio.duracion}
        </p>

        <p className="fw-bold text-warning-emphasis">
          Precio: ${servicio.precio.toLocaleString('es-CL')}
        </p>

        <button
          type="button"
          className="btn btn-warning"
          onClick={reservarServicio}
        >
          Reservar
        </button>
      </div>
    </div>
  )
}

export default TarjetaServicio