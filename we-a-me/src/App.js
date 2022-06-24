import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Index } from "./components/Pages Thiago/1-Index";
import { Categorias } from "./components/Page Danielly/Categorias/Categorias";
import { PaginaCliente } from "./components/Page Danielly/Pagina Inicial Cliente/PaginaCliente";



function App() {
  return (
    <div >

      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/paginacliente" element={<PaginaCliente />} />
        </Routes>
      </Router>

    </div>
  )
};

export default App;



