import React from 'react'
import useCotizador from '../hooks/useCotizador'

function Error() {

  const {error} = useCotizador();

  return (
    <div className='bg-red-700 py-3 text-white font-bold uppercase rounded animate__animated animate__backInLeft'>
      {error}
    </div>
  )
}

export default Error
