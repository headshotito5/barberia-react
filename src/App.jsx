import { useState } from 'react'
import BotonReservas from './componentes/BotonReservas.jsx'
import TarjetaServicio from './componentes/TarjetaServicio.jsx'
import BarraNavegacion from './componentes/BarraNavegacion.jsx'
import servicios from './data/datosBarberia.js'
import Reservas from './componentes/Reservas.jsx'

function App() {
  const [mostrarReservas, setMostrarReservas] = useState(false)
  const [carrito, setCarrito] = useState([])

  function cambiarReservas() {
    setMostrarReservas(!mostrarReservas)
  } 
  function agregarServicio(servicio) {
    const yaExiste = carrito.some (
      (item) => item.id === servicio.id
    )

    if (!yaExiste) {
      setCarrito([...carrito, servicio])
    }
  }
  
  function eliminarServicio(id) {
    setCarrito(
      carrito.filter((servicio) => servicio.id !== id)
    )
  }

  return (
  <>
    <BarraNavegacion />

    <main className="container py-5">

      <section id="inicio" className="inicio-barberia mb-5">

        <div className="texto-bienvenida">
          <h1> Bienvenido a Barbería Urban Style</h1>

          <p> 
            El mejor servivio al alcance de su mano
          </p>

        </div> 
        <BotonReservas onClick={cambiarReservas} />
        
        {mostrarReservas && (
          <div className="contenedor-reservas-desplegable">
            <Reservas
              carrito={carrito}
              eliminarServicio={eliminarServicio}
            />
          </div>
        )}
        
      </section>

      <section id="servicios">
        <div className="row">

          {servicios.map((servicio) => (
            <div
              className="col-12 col-md-6 col-lg-4 mb-4"
              key={servicio.id}
            >
              <TarjetaServicio
                servicio={servicio}
                agregarServicio={agregarServicio}
                estaEnCarrito={carrito.some(
                  (item) => item.id === servicio.id
                )}
              />
            </div>
          ))}
          
        </div>
      </section>

    </main>
    </>
  )
}


export default App
