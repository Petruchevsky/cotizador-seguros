import React, { Fragment } from "react";
import { MARCAS, PLANES, YEARS } from "../constants";
import useCotizador from "../hooks/useCotizador";
import Error from "./Error";

function Formulario() {
  const { datos, handleChangeDatos, error, setError, cotizarSeguro } =
    useCotizador();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(datos).includes("")) {
      setError("Todos los campos Son Obligatorios");
      return;
    }
    setError("");
  };

  return (
    <div className="shadow-gray-800">
      {error && <Error />}
      <form onSubmit={handleSubmit}>
        <div className="mb-5 animate__animated animate__backInLeft ">
          <label
            className="block mb-1 font-bold text-gray-500 uppercase"
            htmlFor="marca"
          >
            Marca
          </label>

          <select
            className="w-full p-2 bg-gray-100 rounded-full appearance-none font-bold text-gray-600 text-center"
            name="marca"
            id="marca"
            onChange={(e) => handleChangeDatos(e)}
            value={datos.marca}
          >
            <option className=" bg-black py-3 text-white font-bold" value="">
              -- Selecciona una Marca --
            </option>
            {MARCAS.map((marca, id) => (
              <option value={marca.id} key={id}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5 mb-5 animate__animated animate__backInRight">
          <label
            className="block mb-1 font-bold text-gray-500 uppercase"
            htmlFor="año"
          >
            Año
          </label>

          <select
           className="w-full p-2 bg-gray-100 rounded-full appearance-none font-bold text-gray-600 text-center"
            name="year"
            id="año"
            onChange={(e) => handleChangeDatos(e)}
            value={datos.year}
          >
            <option className=" bg-black py-3 text-white font-bold" value="">
              -- Seleccionar Año --
            </option>
            {YEARS.map((year, index) => (
              <option value={year} key={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5 mb-5 animate__animated animate__backInLeft">
          <label
            className="block mb-0 font-bold text-gray-500 uppercase"
            htmlFor="planes"
          >
            Selecciona un Plan
          </label>

          <div className="flex gap-5 justify-center w-full pt-0  ">
            {PLANES.map((plan, id) => (
              <Fragment key={plan.id}>
                <label className='text-gray-95000' htmlFor={plan.id}>{plan.nombre}</label>
                <input
                  type="radio"
                  value={plan.id}
                  id={plan.id}
                  name="plan"
                  onChange={(e) => handleChangeDatos(e)}
                />
              </Fragment>
            ))}
          </div>
        </div>

        <input
          onClick={cotizarSeguro}
          type="submit"
          value="COTIZAR"
          className="font-bold bg-green-600 text-white hover:bg-green-950 cursor-pointer w-full py-3 rounded-md transition-colors duration-500 bg-color-transition animate__animated animate__backInUp"
        />
      </form>
    </div>
  );
}

export default Formulario;
