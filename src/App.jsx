import { useState, useEffect } from 'react'
import BarraNavegacion from './componentes/BarraNavegacion.jsx'
import BotonReservas from './componentes/BotonReservas.jsx'
import Reservas from './componentes/Reservas.jsx'
import TarjetaServicio from './componentes/TarjetaServicio.jsx'
import InformacionBarberia from './componentes/InformacionBarberia.jsx'
import CuentasRegistradas from './componentes/CuentasRegistradas.jsx'
import servicios from './data/datosBarberia.js'

function App() {
  const [mostrarReservas, setMostrarReservas] = useState(false)
  const [mostrarAuth, setMostrarAuth] = useState(false)
  const [carrito, setCarrito] = useState([])
  const [usuario, setUsuario] = useState(null)

  useEffect(() => {
    const sesion = localStorage.getItem('sesionActiva')
    if (sesion) {
      setUsuario(JSON.parse(sesion))
    }
  }, [])

  function cerrarSesion() {
    localStorage.removeItem('sesionActiva')
    setUsuario(null)
    setMostrarReservas(false)
  }

  function manejarAutenticacion(datosUsuario) {
    setUsuario(datosUsuario)
    setMostrarAuth(false)
  }

  function agregarServicio(servicio) {
    if (!carrito.some((item) => item.id === servicio.id)) {
      setCarrito([...carrito, servicio])
    }
  }
  
  function eliminarServicio(id) {
    setCarrito(carrito.filter((servicio) => servicio.id !== id))
  }

  return (
    <>
      <BarraNavegacion 
        usuario={usuario} 
        alAbrirAuth={() => {
          setMostrarAuth(true)
          setMostrarReservas(false)
          window.scrollTo(0, 0)
        }} 
        alCerrarSesion={cerrarSesion}
      />

      <main className="container py-5">
        
        {mostrarAuth && (
          <CuentasRegistradas 
            alAutenticar={manejarAutenticacion} 
            alCerrar={() => setMostrarAuth(false)} 
          />
        )}

        <section id="inicio" className="inicio-barberia mb-5 text-center">
          <img 
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Interior Barbería" 
            className="img-fluid rounded shadow mb-4"
            style={{ maxHeight: '350px', objectFit: 'cover', width: '100%' }}
          />
          <div className="texto-bienvenida mb-4">
            <h1>Bienvenido a Barbería Urban Style</h1>
            <p className="text-secondary">El mejor servicio al alcance de su mano</p>
          </div> 
          
          <BotonReservas onClick={() => {
            if (usuario) {
              setMostrarReservas(!mostrarReservas)
              setMostrarAuth(false)
            } else {
              setMostrarAuth(true)
              setMostrarReservas(false)
              window.scrollTo(0, 0)
            }
          }} />
        </section>

        {mostrarReservas && (
          <div className="contenedor-reservas-desplegable mb-5 border-bottom pb-5">
            <Reservas
              carrito={carrito}
              eliminarServicio={eliminarServicio}
              usuario={usuario}
            />
            
            <section id="servicios" className="mt-5">
              <h3 className="mb-4 text-center">Selecciona tus servicios</h3>
              <div className="row">
                {servicios.map((servicio) => (
                  <div className="col-12 col-md-6 col-lg-4 mb-4" key={servicio.id}>
                    <TarjetaServicio
                      servicio={servicio}
                      agregarServicio={agregarServicio}
                      estaEnCarrito={carrito.some((item) => item.id === servicio.id)}
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        <InformacionBarberia />
      </main>
    </>
  )
}

export default App