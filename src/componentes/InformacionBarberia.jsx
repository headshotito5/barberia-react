import { useState } from 'react'

function InformacionBarberia() {
  // Estado para controlar qué pregunta está abierta
  const [preguntaActiva, setPreguntaActiva] = useState(null)

  function alternarPregunta(id) {
    if (preguntaActiva === id) {
      setPreguntaActiva(null) // La cierra si ya estaba abierta
    } else {
      setPreguntaActiva(id) // Abre la nueva
    }
  }

  return (
    <>
      <section id="conocenos" className="py-5 bg-light rounded shadow-sm mb-5 px-4 mt-5">
        <div className="row align-items-center">
          <div className="col-md-7 mb-4 mb-md-0">
            <h2 className="fw-bold mb-4 text-warning-emphasis">Conócenos</h2>
            <p className="lead">Somos <strong>Urban Style</strong>.</p>
            <p>Nacimos en el año 2021 con una misión clara: revolucionar el concepto de la barbería tradicional. Empezamos en un pequeño local con una sola silla, mucha pasión y el deseo de ofrecer cortes precisos en un ambiente de total confianza.</p>
            <p>No solo cortamos el pelo; creamos un estilo, una experiencia y una comunidad. ¡Tu imagen es nuestra mejor carta de presentación!</p>
          </div>
          <div className="col-md-5 text-center">
            <div className="bg-dark rounded shadow d-flex align-items-center justify-content-center" style={{height: "250px", color: "white"}}>
              <span className="fs-5 text-warning">a</span>
            </div>
          </div>
        </div>
      </section>

      <section id="locales" className="py-5 mb-5">
        <h2 className="fw-bold text-center mb-5 text-warning-emphasis">Nuestros Locales</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-warning bg-dark text-white">
              <div className="card-body p-4">
                <h4 className="card-title text-warning">Sede Centro, Temuco</h4>
                <p className="card-text mt-3">Nuestro local principal, equipado con la mejor tecnología, sillones premium y comodidades para tu espera. Ubicado en el corazón de la ciudad.</p>
                <p className="mb-0 fw-bold">📍 Calle Falsa 123, Centro.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-warning bg-dark text-white">
              <div className="card-body p-4">
                <h4 className="card-title text-warning">Sede Labranza</h4>
                <p className="card-text mt-3">Nuestra nueva sucursal, diseñada con un estilo más urbano y relajado. Ideal para quienes buscan la mejor calidad sin alejarse de su sector.</p>
                <p className="mb-0 fw-bold">📍 Calle Los Creadores 456, Labranza.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="vision" className="py-5 bg-warning text-dark rounded shadow-sm mb-5 px-4">
        <div className="text-center">
          <h2 className="fw-bold mb-4">Nuestra Visión</h2>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <p className="fs-5 mb-0">Aspiramos a convertirnos en la cadena de barberías más grande y reconocida a nivel nacional. Queremos llevar el sello de <strong>Urban Style</strong> a cada rincón del país, expandiendo nuestros locales mientras mantenemos intacta la calidad.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="preguntas" className="py-5 mb-5">
        <h2 className="fw-bold text-center mb-5 text-warning-emphasis">Preguntas Frecuentes</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="accordion shadow-sm">
              
              {/* Pregunta 1 */}
              <div className="accordion-item border-warning">
                <h2 className="accordion-header">
                  <button 
                    className={`accordion-button fw-bold ${preguntaActiva === 1 ? '' : 'collapsed'}`} 
                    type="button" 
                    onClick={() => alternarPregunta(1)}
                  >
                    ¿Necesito reservar con anticipación o puedo llegar directo al local?
                  </button>
                </h2>
                <div className={`accordion-collapse collapse ${preguntaActiva === 1 ? 'show' : ''}`}>
                  <div className="accordion-body">
                    Recomendamos encarecidamente agendar tu cita a través de esta misma página web en la sección "Reservas" para asegurar tu lugar y evitar esperas. Sin embargo, también atendemos por orden de llegada dependiendo de la disponibilidad del momento.
                  </div>
                </div>
              </div>

              {/* Pregunta 2 */}
              <div className="accordion-item border-warning">
                <h2 className="accordion-header">
                  <button 
                    className={`accordion-button fw-bold ${preguntaActiva === 2 ? '' : 'collapsed'}`} 
                    type="button" 
                    onClick={() => alternarPregunta(2)}
                  >
                    ¿Qué métodos de pago aceptan?
                  </button>
                </h2>
                <div className={`accordion-collapse collapse ${preguntaActiva === 2 ? 'show' : ''}`}>
                  <div className="accordion-body">
                    Aceptamos efectivo, tarjetas de débito y crédito, y transferencias bancarias a través de aplicaciones móviles (CuentaRUT, MACH, Tenpo, Mercado Pago, etc).
                  </div>
                </div>
              </div>

              {/* Pregunta 3 */}
              <div className="accordion-item border-warning">
                <h2 className="accordion-header">
                  <button 
                    className={`accordion-button fw-bold ${preguntaActiva === 3 ? '' : 'collapsed'}`} 
                    type="button" 
                    onClick={() => alternarPregunta(3)}
                  >
                    ¿Los cortes incluyen lavado de cabello?
                  </button>
                </h2>
                <div className={`accordion-collapse collapse ${preguntaActiva === 3 ? 'show' : ''}`}>
                  <div className="accordion-body">
                    El lavado de cabello está incluido en nuestros servicios de "Corte Premium" y en los "Combos". Si eliges el "Corte clásico", puedes agregar el lavado desde la lista de servicios por un valor adicional.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default InformacionBarberia