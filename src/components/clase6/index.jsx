import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Contador from "./contador";

export default function Clase6() {
  const [prueba2, setPrueba2] = useState();
  const [prueba, setPrueba] = useState([
    { nombre: "Matias", edad: 20 },
    { nombre: "Francisco", edad: 22 },
  ]);

  const onChangePrueba = (e) => {
    
    setPrueba2(e.target.value);
  };

  const onClickAgregar = () => {
    let obj = {
      nombre: prueba2,
      edad: 23,
    };
    setPrueba([...prueba, obj]);
  };

  useEffect(()=>{

  },[prueba2])

  return (
    <Grid container>
      <Grid item xs={12}>
        <TextField label="prueba" value={prueba2} onChange={onChangePrueba} />
      </Grid>
      <Grid item xs={12}>
        <Button onClick={onClickAgregar}>agregar al array</Button>
      </Grid>
      {console.log(prueba)}
      <Grid item xs={12}>
        {prueba.map((x, index) => (
          <Typography key={index + 1}>{x.nombre}</Typography>
        ))}
      </Grid>
      <Grid item xs={12}>
        <Contador />
      </Grid>
    </Grid>
  );
}
