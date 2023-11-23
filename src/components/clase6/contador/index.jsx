import { Typography, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Contador() {
  const [n, setN] = useState(0);
  const [p, setP] = useState();

  useEffect(() => {
    setP(n);
  }, [n]);

  //esta funcion devuelve un console.log
  const renderizado = () => console.log("se hizo ", n, " click");

  return (
    <div>
      <TextField value={p} onChange={(e) => setP(e.target.value)} />
      <Typography>{n}</Typography>
      <Button onClick={() => setN(n - 1)}>Decrementar</Button>
      <Button onClick={() => setN(n + 1)}>Incrementar</Button>
    </div>
  );
}
