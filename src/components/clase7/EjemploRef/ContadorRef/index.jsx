import { Typography, Button } from "@mui/material";
import React, { useState, useRef } from "react";

export default function ContadorRef() {
  const [numero, setNumero] = useState(0);
  const [validador, setValidador] = useState(false);
  const countRef = useRef(0);

  const reiniciarContador = () => {
    countRef.current = 0;
    setNumero(countRef.current);
  };

  const incrementar = () => {
    countRef.current += 1;
    //setNumero(countRef.current)
  };

  const cambiarValidador = () => {
    setValidador(!validador);
  };

  return (
    <div>
      <Typography>Contador State: {numero}</Typography>
      <Typography>Contador Ref: {countRef.current}</Typography>
      <Button variant="outlined" onClick={incrementar}>
        Incrementar
      </Button>
      <Button variant="outlined" onClick={reiniciarContador}>
        Reiniciar
      </Button>
      <Button variant="outlined" onClick={cambiarValidador}>
        Cambiar Validacion
      </Button>
    </div>
  );
}
