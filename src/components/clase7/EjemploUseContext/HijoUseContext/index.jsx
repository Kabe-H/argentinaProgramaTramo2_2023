import React from "react";
import { useUserContext, useUserToggleContext } from "../../userProvider";
import { Button, Typography } from "@mui/material";

export default function HijoUseContext() {
  const user = useUserContext();
  const cerrarSesion = useUserToggleContext();
  return (
    <div>
      <Button onClick={cerrarSesion}>
        {user ? "Cerrar Sesion" : "Iniciar Sesion"}
      </Button>
      {user && (
        <Typography>
          Hola {user.name}, iniciaste sesion con el mail: {user.mail}
        </Typography>
      )}
    </div>
  );
}
