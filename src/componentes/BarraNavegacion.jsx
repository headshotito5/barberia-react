function BarraNavegacion({ cantidadServicios }) {
  return (
    <nav className="navbar bg-dark border-bottom border-warning">
      <div className="container py-2 d-flex justify-content-between align-items-center">
        <div>
          <h1 className="h4 text-warning mb-1">
            Barbería Urban Style
          </h1>

          <p className="text-white mb-0">
            Cortes, barba y estilo en un solo lugar.
          </p>
        </div>

        <span className="badge text-bg-warning fs-6">
          {cantidadServicios} 5 servicios disponibles
        </span>
      </div>
    </nav>
  )
}

export default BarraNavegacion