import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Formulario from "./formulario";

export default function Clase5() {
  const [palabra, setPalabra] = useState("");
 

  const onClickConsole = () => console.log("Hice click");

  const onChangePalabra = (e) => {
    setPalabra(e.target.value);
    console.log(e)
  };

  return (
    <div>
      {/* <TextField
        label="Ingrese palabra"
        value={palabra}
        onChange={onChangePalabra}
      />
      <Typography>{palabra}</Typography>
      <Button onClick={onClickConsole}>CLICK</Button> */}
      <Formulario/>
    </div>
  );
}
