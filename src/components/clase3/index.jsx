import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import { Button } from "@mui/material";

export default function Clase3() {
  const navigate = useNavigate()
  let autorizacion = false;

  const onClickNavegacion = () =>{
    navigate("/clase4")
  }

  return (
    <>
      <h1 className="titulo">Hola Mundo</h1>
      <h1>CLASE 3</h1>
      {autorizacion ? <h2>Puede pasar</h2> : <h2>No puede pasar</h2>}
      <Link to={"/clase6"}>Clase 6 </Link>
      <Button variant="contained" onClick={onClickNavegacion}>Clase 4</Button>
    </>
  );
}
