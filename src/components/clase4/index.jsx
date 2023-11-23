import { Button } from "@mui/material";
import React, { useState } from "react";
import MiDialogo from "../UI/MiDialog";

export default function Clase4() {
  //hooks
  const [dialog, setDialog] = useState({
    open: false,
    title: "Primer titulo",
    message: "Primer tmessage",
  });
  const [mensajeDialogo, setMensajeDialogo] = useState("")
  //variables
  //llamadas a la api
  //onchange, onClick, etc.
  const abrirDialog = () => {
    setDialog({open:true, title:"Argentina Programa", message:"Comision 56"});
    setMensajeDialogo("Este el mensaje")
  };

  return (
    <div>
      {console.log(dialog)}
      <Button variant="contained" onClick={abrirDialog}>
        Abrir Dialogo
      </Button>
      <MiDialogo
        open={dialog.open}
        title={dialog.title}
        message={mensajeDialogo}
        actions={[
          {
            text: "Cerrar Dialogo",
            color: "secondary",
            variant: "contained",
            onClick: () => {
              setDialog({...dialog, open:false});
            },
          },
        ]}
      />
    </div>
  );
}
