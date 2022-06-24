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
import { PaginaClienteReformas } from "./components/Page Danielly/Login/Pagina Inicial Cliente/Reformas/PaginaClienteReformas";
import { PaginaClienteBeleza } from "./components/Page Danielly/Login/Pagina Inicial Cliente/Beleza/PaginaClienteBeleza";
import { PaginaClienteAuto } from "./components/Page Danielly/Login/Pagina Inicial Cliente/Auto/PaginaClienteAuto";

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
          {/* Paginas depois de ter feito o login */}
          <Route path="/logincliente" element={<LoginCliente />} />
          <Route path="/loginreformas" element={<PaginaClienteReformas />} />
          <Route path="/loginbeleza" element={<PaginaClienteBeleza />} />
          <Route path="/loginauto" element={<PaginaClienteAuto />} />
        </Routes>
      </Router>

    </div>
  )
};

export default App;



