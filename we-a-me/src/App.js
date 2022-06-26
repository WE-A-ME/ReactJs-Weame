import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Index } from "./components/Pages Thiago/1-Index";
import { Categorias } from "./components/Page Danielly/Categorias/Categorias";
import { PaginaCliente } from "./components/Page Danielly/Pagina Inicial Cliente/PaginaCliente";
import { Reformas } from "./components/Page Danielly/LoginCategorias/Reformas/LoginCategoriasReformas";
import { Moda } from "./components/Page Mariana/Moda/LoginCategoriasModa";
import { Suporte } from "./components/Pages Thiago/Suporte/Suporte";
import { Contratos } from "./components/Page Geovanna/contratos/Contratos";
import { ComoAvaliar } from "./components/Page Geovanna/comoavaliar/ComoAvaliar";
import { ComoSerParceiro } from "./components/Page Geovanna/comoserparceiro/ComoSerParceiro";
import { OqVcP } from "./components/Page Geovanna/oqvcp/OqVcP";
import { SobreNos } from "./components/Page Danielly/SobreNos/SobreNos";
import { CadastroCliente } from "./components/Pages Thiago/CadastroCliente/cadastro";
import { LoginCliente } from "./components/Pages Thiago/LoginCliente/login";
import { PaginaClienteReformas } from "./components/Page Danielly/Login/Pagina Inicial Cliente/Reformas/PaginaClienteReformas";
import { PaginaClienteBeleza } from "./components/Page Danielly/Login/Pagina Inicial Cliente/Beleza/PaginaClienteBeleza";
import { PaginaClienteAuto } from "./components/Page Danielly/Login/Pagina Inicial Cliente/Auto/PaginaClienteAuto";
import { PaginaClienteAssistencia } from "./components/Page Danielly/Login/Pagina Inicial Cliente/Assistencia/PaginaClienteAssistencia";
import { PaginaClienteAlimentos } from "./components/Page Danielly/Login/Pagina Inicial Cliente/Alimentos/PaginaClienteAlimentos";
import { PaginaClienteProgramacao } from "./components/Page Danielly/Login/Pagina Inicial Cliente/Programação/PaginaClienteProgramacao";
import { PaginaClienteLimpeza } from "./components/Page Danielly/Login/Pagina Inicial Cliente/Limpeza/PaginaClienteLimpeza";
import { PaginaClienteDesign } from "./components/Page Danielly/Login/Pagina Inicial Cliente/Design/PaginaClienteDesign";
import { PaginaClienteComercio } from "./components/Page Danielly/Login/Pagina Inicial Cliente/Comercio/PaginaClienteComercio";
import { PaginaClienteModa } from "./components/Page Danielly/Login/Pagina Inicial Cliente/Moda/PaginaClienteModa";
import { Beleza } from "./components/Page Lennon/2-Beleza/CategoriasBeleza";
import { Auto } from "./components/Page Lennon/3-Auto/CategoriasAuto";
import { Assistencia } from "./components/Page Lennon/4-Assistencia/CategoriasAssistencia";
import { Alimentos } from "./components/Page Lennon/5-Alimentos/CategoriasAlimentos";
import { Programacao } from "./components/Page Lennon/6-Programacao/CategoriasProgramacao";
import { Limpeza } from "./components/Page Lennon/7-Limpeza/CategoriasLimpeza";
import { Design } from "./components/Page Lennon/8-Design/CategoriasDesign";
import { Comercio } from "./components/Page Lennon/9-Comércio/CategoriasComercio";

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
          <Route path="/contratos" element={<Contratos />} />
          <Route path="/comoavaliar" element={<ComoAvaliar />} />
          <Route path="/OqVcP" element={<OqVcP />} />
          <Route path="/comoserparceiro" element={<ComoSerParceiro />} />
          <Route path="/cadastrocliente" element={<CadastroCliente />} />
          <Route path="/reformas" element={<Reformas />} />
          <Route path="/beleza" element={<Beleza />} />
          <Route path="/auto" element={<Auto />} />
          <Route path="/assistencia" element={<Assistencia />} />
          <Route path="/Alimentos" element={<Alimentos />} />
          <Route path="/Programacao" element={<Programacao />} />
          <Route path="/Limpeza" element={<Limpeza />} />
          <Route path="/Design" element={<Design />} />
          <Route path="/Comercio" element={<Comercio />} />
          <Route path="/moda" element={<Moda />} />
          {/* Paginas depois de ter feito o login */}
          <Route path="/logincliente" element={<LoginCliente />} />
          <Route path="/loginreformas" element={<PaginaClienteReformas />} />
          <Route path="/loginbeleza" element={<PaginaClienteBeleza />} />
          <Route path="/loginauto" element={<PaginaClienteAuto />} />
          <Route path="/loginassistencia" element={<PaginaClienteAssistencia />} />
          <Route path="/loginalimentos" element={<PaginaClienteAlimentos />} />
          <Route path="/loginprogramacao" element={<PaginaClienteProgramacao />} />
          <Route path="/loginlimpeza" element={<PaginaClienteLimpeza />} />
          <Route path="/logindesign" element={<PaginaClienteDesign />} />
          <Route path="/logincomercio" element={<PaginaClienteComercio />} />
          <Route path="/loginmoda" element={<PaginaClienteModa />} />
          
        </Routes>
      </Router>

    </div>
  )
};

export default App;



