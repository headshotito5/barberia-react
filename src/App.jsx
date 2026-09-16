
import TarjetaServicio from './componentes/TarjetaServicio.jsx'
import BarraNavegacion from './componentes/BarraNavegacion.jsx'
import servicios from './data/datosBarberia.js'
import Reservas from './componentes/Reservas.jsx'

function App() {
  return (
  <>
    <BarraNavegacion />

    <main className="container py-5">
      <section id="inicio" className="text-center mb-5">
        <h1>Bienvenido a Barbería Urban Style</h1>
        <p>El mejor servicio al alcance de su mano.</p>
      </section>

      <section id="servicios">
        <div className="row">
          {servicios.map((servicio) => (
            <div
              className="col-12 col-md-6 col-lg-4 mb-4"
              key={servicio.id}
            >
              <TarjetaServicio servicio={servicio} />
              </div>
          ))}
        </div>
      </section>

      <Reservas servicios={servicios} />

    </main>
    </>
  )
}

export default App
