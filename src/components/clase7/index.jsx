import React from "react";
import EjemploUseContext from "./EjemploUseContext";
import Nombre from "./EjemploRef/Nombre";
import Focus from "./EjemploRef/Focus";
import ContadorRef from "./EjemploRef/ContadorRef";

export default function index() {
  return (
    <div>
      <EjemploUseContext />
      <Nombre />
      <Focus />
      <ContadorRef/>
    </div>
  );
}
