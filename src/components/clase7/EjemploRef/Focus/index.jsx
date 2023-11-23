import { Button, TextField } from "@mui/material";
import React, { useRef } from "react";

export default function Focus() {
  const focusRef = useRef(null);
  const handleClick = () => {
    console.log(focusRef.current.value);
    focusRef.current.focus();
  };
  return (
    <div>
      <TextField inputRef={focusRef} label="Escriba aqui" variant="outlined" />
      <Button onClick={handleClick} variant="outlined">
        Enfocar
      </Button>
    </div>
  );
}
