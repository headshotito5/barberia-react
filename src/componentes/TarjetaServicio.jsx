function TarjetaServicio({ 
  servicio,
  agregarServicio,
  estaEnCarrito
}) {

  return (
    <div className="card shadow-sm border-warning h-100">
      <div className="card-body d-flex flex-column">

        <span className="badge bg-dark text-warning align-self-start">
          {servicio.categoria}
        </span>

        <h5 className="card-title mt-3">
          {servicio.nombre}
        </h5>

        <p className="card-text text-secondary">
          {servicio.descripcion}
        </p>

        <p>
          <strong>Duración aproximada:</strong> 
          {servicio.duracion}
        </p>

        <p className="fw-bold text-warning-emphasis">
          Precio: ${servicio.precio.toLocaleString('es-CL')}
        </p>

        <button
          type="button"
          className={
            estaEnCarrito
              ? 'btn btn-secondary mt-auto'
              : 'btn btn-warning mt-auto'
          }
          onClick={() => agregarServicio(servicio)}
          disabled={estaEnCarrito}
          >
        {estaEnCarrito
           ? 'servicio agregado'
            : 'agregar servicio'}

        </button>
      </div>
    </div>
  )
}

export default TarjetaServicio