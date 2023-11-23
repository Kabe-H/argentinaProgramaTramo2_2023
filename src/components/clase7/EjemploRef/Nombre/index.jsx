import { Typography, Button } from "@mui/material";
import React, { useRef } from "react";

export default function Nombre() {
  const name = useRef("Demian");

  const cambiarNombre = () => {
    name.current = "Jorge";
    console.log(name.current);
  };
  return (
    <div>
      <Typography>{name.current}</Typography>
      <Button variant="outlined" onClick={cambiarNombre}>
        Cambiar nombre
      </Button>
    </div>
  );
}
