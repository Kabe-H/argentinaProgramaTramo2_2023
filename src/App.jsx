import { Grid } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Header from "./components/UI/header";
import Clase3 from "./components/clase3";
import Clase3a from "./components/clase3a/clase3a.jsx";
import Clase4 from "./components/clase4";
import Clase5 from "./components/clase5";
import Clase6 from "./components/clase6";
import Clase7 from "./components/clase7";
import { Route, Routes } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Clase3 />} />
      <Route path="/clase3a" element={<Clase3a />} />
      <Route path="/clase4" element={<Clase4 />} />
      <Route path="/clase5" element={<Clase5 />} />
      <Route path="/clase6" element={<Clase6 />} />
      <Route path="/clase7" element={<Clase7 />} />     
    </Routes>
  );
}

export default App;
