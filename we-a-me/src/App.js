import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Index } from "./components/Pages Thiago/1-Index";
import { Categorias } from "./components/Page Danielly/Categorias/Categorias";
import { PaginaCliente } from "./components/Page Danielly/Pagina Inicial Cliente/PaginaCliente";
import { Reformas } from "./components/Page Danielly/LoginCategorias/Reformas/LoginCategoriasReformas";
import { Suporte } from "./components/Pages Thiago/Suporte/Suporte";
import { SobreNos } from "./components/Page Danielly/SobreNos/SobreNos";
import { CadastroCliente } from "./components/Pages Thiago/CadastroCliente/cadastro";
import { LoginCliente } from "./components/Pages Thiago/LoginCliente/login";

function App() {
  return (
    <div >

      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/paginacliente" element={<PaginaCliente />} />
          <Route path="/suporte" element={<Suporte />} />
          <Route path="/sobrenos" element={<SobreNos />} />
          <Route path="/cadastrocliente" element={<CadastroCliente />} />
          <Route path="/reformas" element={<Reformas />} />
          <Route path="/logincliente" element={<LoginCliente />} />
        </Routes>
      </Router>

    </div>
  )
};

export default App;



