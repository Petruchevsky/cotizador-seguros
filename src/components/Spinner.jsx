import React from 'react'
import '../styles/Spinner.css'
import useCotizador from '../hooks/useCotizador';

function Spinner() {

  const { error, resultado } = useCotizador()
  if(error) return null;

  return (
    <div className="sk-cube-grid animate__animated animate__zoomIn">
    <div className="sk-cube sk-cube1"></div>
    <div className="sk-cube sk-cube2"></div>
    <div className="sk-cube sk-cube3"></div>
    <div className="sk-cube sk-cube4"></div>
    <div className="sk-cube sk-cube5"></div>
    <div className="sk-cube sk-cube6"></div>
    <div className="sk-cube sk-cube7"></div>
    <div className="sk-cube sk-cube8"></div>
    <div className="sk-cube sk-cube9"></div>
  </div>
  )
}

export default Spinner
