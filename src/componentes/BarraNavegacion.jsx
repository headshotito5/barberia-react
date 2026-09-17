import logo from '../assets/Urban Style logo.png'
function BarraNavegacion() {
  return (
    <header className="sticky-top">

      <div className= "barra_principal">
        <div className="container d-flex justify-content-between align-items-center">

          <a href ="#inicio">
            <img
              src={logo}
              alt="Urban Style Barbería"
              className="logo-barberia"
            />
          </a>

        </div>
      </div>

      <nav className="barra_menu">
        <div className="container">
          <div className="menu_enlaces">

            <a href="#conocenos">
              Conócenos
            </a>

            <a href="#locales">
              Nuestros locales
            </a>

            <a href="#vision">
              Nuestra visión
            </a>

            <a href="#preguntas">
              Preguntas frecuentes
            </a>

          </div>
        </div>
      </nav>
    </header>
  )
}

export default BarraNavegacion
