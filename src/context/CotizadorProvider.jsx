import { createContext, useState } from "react";
import { calcularMarca, calcularPlan, formatearDinero, obtenerDiferenciaYear } from "../helpers";

const CotizadorContext = createContext();

const CotizadorProvider = ({children}) => {

  const [datos, setDatos] = useState({
    marca: '',
    year: '',
    plan: ''
  })

  const [resultado, setResultado] = useState(0)
  const [error, setError] = useState('')
  const [cargando, setCargando] = useState(false)

  const handleChangeDatos = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }

  const cotizarSeguro = () => {
    let resultado = 35000  

    const diferencia = obtenerDiferenciaYear(datos.year)
    resultado -= ((diferencia * 3) * resultado) / 100
    resultado *= calcularMarca(datos.marca);
    resultado *= calcularPlan(datos.plan)
    resultado = formatearDinero(resultado)

    setCargando(true)
    setTimeout(() => {
      setResultado(resultado);
      setCargando(false)
    }, 3000)
  }

  return(
    <CotizadorContext.Provider
      value={{
        datos,
        handleChangeDatos,
        error, 
        setError, 
        cotizarSeguro,
        resultado,
        setResultado, 
        cargando, 
        setCargando
      }}>
      {children}
    </CotizadorContext.Provider>
  )
}

export {
  CotizadorProvider
}

export default CotizadorContext;