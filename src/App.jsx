import { useState } from 'react'
import AppSeguro from './components/AppSeguro'
import { CotizadorProvider } from './context/CotizadorProvider'



function App() {
  const [count, setCount] = useState(0)

  return (
    <CotizadorProvider>
      <AppSeguro />
    </CotizadorProvider>
  )
}

export default App
