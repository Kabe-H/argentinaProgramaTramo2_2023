import { Grid, TextField, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import MostrarDatos from "./mostrarDatos";

export default function Formulario() {
  const [nombre, setNombre] = useState();
  const [mail, setMail] = useState();
  const [submit, setSubmit] = useState();

  const onChangeNombre = (e) => setNombre(e.target.value);
  const onChangeMail = (e) => setMail(e.target.value);

    useEffect(()=>{
        console.log("el nombre cambio")
    },[])

  const onChange = (setState) => (e) => {
    setState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };

  return (
    <Grid container>
      {!submit && (
        <Grid item xs={12}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="nombre"
                  label="Nombre Completo"
                  name="nombre"
                  variant="outlined"
                  value={nombre}
                  onChange={onChange(setNombre)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="mail"
                  label="Correo Electronico"
                  name="mail"
                  variant="outlined"
                  value={mail}
                  onChange={onChange(setMail)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" type="submit">
                  Registrarse
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      )}

      <Grid item xs={12}>
        {submit && (
          <>
            <Typography variant="h3">Datos Inresados</Typography>
            <MostrarDatos name={nombre} mail={mail} />
            {/* <Typography>{nombre}</Typography>
            <Typography>{mail}</Typography> */}
          </>
        )}
      </Grid>
    </Grid>
  );
}
