function BotonReservas({ onClick }) {
  return (
    <button
      type="button"
      className="boton-reservas-inicio"
      onClick={onClick}
    >
      <svg
        className="icono-reservas"
        viewBox="0 0 180 100"
        aria-hidden="true"
      >
        {/* PEINE */}
        <g
          className="peine-grupo"
          transform="translate(8, 8) rotate(-32 35 35)"
        >
          <rect
            className="peine-cuerpo"
            x="28"
            y="8"
            width="20"
            height="64"
            rx="4"
          />

          <line x1="25" y1="15" x2="41" y2="15" />
          <line x1="25" y1="21" x2="41" y2="21" />
          <line x1="25" y1="27" x2="41" y2="27" />
          <line x1="25" y1="33" x2="41" y2="33" />
          <line x1="25" y1="39" x2="41" y2="39" />
          <line x1="25" y1="45" x2="41" y2="45" />
          <line x1="25" y1="51" x2="41" y2="51" />
          <line x1="25" y1="57" x2="41" y2="57" />
          <line x1="25" y1="63" x2="41" y2="63" />
        </g>

        {/* MITAD SUPERIOR DE LA TIJERA */}
        <g className="mitad-tijera mitad-superior">

          {/* Mango */}
          <circle
            className="aro-tijera"
            cx="58"
            cy="50"
            r="11"
          />

          {/* Brazo */}
          <line
            className="brazo-tijera"
            x1="69"
            y1="50"
            x2="92"
            y2="50"
          />

          {/* Hoja */}
          <path
            className="hoja-tijera"
            d="
              M 92 46
              L 144 50
              L 92 54
              Z
            "
          />

        </g>

        {/* MITAD INFERIOR DE LA TIJERA */}
        <g className="mitad-tijera mitad-inferior">

          {/* Mango */}
          <circle
            className="aro-tijera"
            cx="58"
            cy="50"
            r="11"
          />

          {/* Brazo */}
          <line
            className="brazo-tijera"
            x1="69"
            y1="50"
            x2="92"
            y2="50"
          />

          {/* Hoja */}
          <path
            className="hoja-tijera"
            d="
              M 92 46
              L 144 50
              L 92 54
              Z
            "
          />

        </g>

        {/* Tornillo / eje */}
        <circle
          className="eje-tijera"
          cx="92"
          cy="50"
          r="4"
        />
      </svg>

      <span>Reservas</span>
    </button>
  )
}

export default BotonReservas