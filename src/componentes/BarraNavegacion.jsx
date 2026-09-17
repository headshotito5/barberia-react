import logo from '../assets/Urban Style logo.png'

function BarraNavegacion({ usuario, alAbrirAuth, alCerrarSesion }) {
  const nombreUsuario = usuario && usuario.nombre ? usuario.nombre.split(' ')[0] : 'Cliente'

  return (
    <header className="sticky-top bg-white">
      <div className="barra_principal py-2 border-bottom">
        <div className="container d-flex justify-content-between align-items-center">
          <a href="#inicio">
            <img src={logo} alt="Urban Style Barbería" className="logo-barberia" style={{ height: '50px' }} />
          </a>

          {usuario ? (
            <div className="d-flex align-items-center gap-3">
              <span className="fw-bold">Hola, {nombreUsuario}</span>
              <button className="btn btn-outline-danger btn-sm" onClick={alCerrarSesion}>
                Cerrar sesión
              </button>
            </div>
          ) : (
            <button className="btn btn-warning fw-bold shadow-sm" onClick={alAbrirAuth}>
              Iniciar sesión / Crear cuenta
            </button>
          )}
        </div>
      </div>

      <nav className="barra_menu bg-dark py-2">
        <div className="container">
          <div className="d-flex gap-4">
            <a href="#conocenos" className="text-white text-decoration-none">Conócenos</a>
            <a href="#locales" className="text-white text-decoration-none">Nuestros locales</a>
            <a href="#vision" className="text-white text-decoration-none">Nuestra visión</a>
            <a href="#preguntas" className="text-white text-decoration-none">Preguntas frecuentes</a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default BarraNavegacion