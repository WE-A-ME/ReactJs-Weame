import NavBar from "./components/NavBar/NavBar";
import NavbarCategorias from "./components/NavbarCategorias/NavbarCategorias";

import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import NavBarIndex from "./components/NavBarIndex/NavBarIndex";
import Categorias from "./Paginas/Categorias/Categorias";
import SobreNos from "./Paginas/SobreNos/SobreNos";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBarIndex/>
      </BrowserRouter>
        <Categorias/>
        <SobreNos/>
    </div>
  );
}

export default App;
