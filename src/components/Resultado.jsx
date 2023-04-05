import React, { useCallback } from 'react'
import useCotizador from '../hooks/useCotizador'
import { MARCAS, PLANES, YEARS } from '../constants';

function Resultado() {

  const { resultado, error, datos } = useCotizador();
  const { marca, year, plan } = datos;

  const marcaResumen = useCallback(MARCAS[marca-1], [resultado])
  const yearResumen = useCallback(year, [resultado])
  const planResumen = useCallback(PLANES[plan-1], [resultado])

  if(resultado === 0 || error) return null;

  return (
    <div className='bg-gradient-to-r from-blue-700 to-indigo-400 shadow rounded-md mt-5 p-5 
         animate__animated animate__jackInTheBox'>
      <p className='pt-0 mb-3 text-white font-bold text-3xl'>Resumen</p>
      <p className='pt-0 text-white font-semibold text-1xl'>Marca: <span className='font-normal'>{marcaResumen.nombre}</span></p>
      <p className='pt-0 text-white font-semibold text-1xl'>Año: {yearResumen}</p>
      <p className='pt-0 text-white font-semibold text-1xl'>Plan: <span className='font-normal'>{planResumen.nombre}</span></p>
      <p className='text-yellow-300  font-bold text-2xl mt-3'>Total Seguro {resultado}</p>
    </div>
  )
}

export default Resultado
