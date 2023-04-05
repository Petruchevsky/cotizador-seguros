import React from "react";
import Formulario from "./Formulario";
import useCotizador from "../hooks/useCotizador";
import Resultado from "./Resultado";
import Spinner from "./Spinner";

function AppSeguro() {
  const { cargando } = useCotizador();

  return (
    <div className="min-h-screen overflow-auto flex flex-col justify-between">

      <header className="text-center">
        <h1 className="text-3xl mt-5 text-white text-center font-semibold text-shadow animate__animated animate__backInLeft sm:font-bold sm:text-4xl px-10 ">
          Cotizador de Seguros
          <br />de Automóviles
        </h1>
      </header>

     <div className="py-6">
       <main
         className="shadow-gray-900 w-5/6 py-4 px-6 bg-gray-200 mx-auto rounded-lg p-10 text-center animate__animated animate__zoomIn sm:w-2/3 md:w-1/2 lg:w-2/5"
       >
         <Formulario />
         {cargando ? <Spinner /> : <Resultado />}
       </main>
     </div>

      <footer className="py-4 bg-gradient-to-r from-green-950 to-green-600">
        <h1 className="text-md font-semibold tracking-wider text-white text-center animate__animated animate__backInLeft">
           Desarrollado por Moisés Berdichevsky (MEBA) 
           <br /> 
           Powered by React
        </h1>
      </footer>

    </div>
  );
}

export default AppSeguro;
