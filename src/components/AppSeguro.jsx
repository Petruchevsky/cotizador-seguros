import React from "react";
import Formulario from "./Formulario";
import useCotizador from "../hooks/useCotizador";
import Resultado from "./Resultado";
import Spinner from "./Spinner";

function AppSeguro() {
  const { cargando } = useCotizador();

  return (
    <div className="min-h-screen overflow-auto">
      <footer className="py-2 mb-5 bg-gradient-to-r from-black to-gray-500">
        <h1 className="text-sm font-semibold tracking-wider text-white text-center animate__animated animate__backInLeft sm:text-md md:text-lg">
          Desarrollado por Moisés Berdichevsky (MEBA)
          <br />
          Powered by React
        </h1>
      </footer>

      <header className="text-center mb-2">
        <h1 className="text-3xl text-white text-center font-semibold text-shadow animate__animated animate__backInLeft sm:font-bold sm:text-4xl">
          Cotizador de Seguros
          <br />
          de Automóviles
        </h1>
      </header>

      <div className="py-6">
        <main className="shadow-gray-900 w-5/6 py-4 px-6 bg-gray-200 mx-auto rounded-lg p-10 text-center animate__animated animate__zoomIn sm:w-2/3 md:w-1/2 lg:w-2/5">
          <Formulario />
          {cargando ? <Spinner /> : <Resultado />}
        </main>
      </div>
    </div>
  );
}

export default AppSeguro;
