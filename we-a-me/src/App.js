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
import { MeusDados } from "./components/Page Danielly/Meus Dados/MeusDados";
import { CadastroEmpresa } from "./components/Page Hasan/cadastro-empresa/cadastroempresa";
import { PerfilProf } from "./components/Page Hasan/perfil-prof/perfilprof";

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
          <Route path="/categorias/reformas" element={<Reformas />} />
          <Route path="/categorias/beleza" element={<Beleza />} />
          <Route path="/categorias/auto" element={<Auto />} />
          <Route path="/categorias/assistencia" element={<Assistencia />} />
          <Route path="/categorias/Alimentos" element={<Alimentos />} />
          <Route path="/categorias/Programacao" element={<Programacao />} />
          <Route path="/categorias/Limpeza" element={<Limpeza />} />
          <Route path="/categorias/Design" element={<Design />} />
          <Route path="/categorias/Comercio" element={<Comercio />} />
          <Route path="/categorias/moda" element={<Moda />} />
          <Route path="/cadastroempresa" element={<CadastroCliente />} />
          <Route path="/perfilprof" element={<PerfilProf />} />
          {/* Paginas depois de ter feito o login */}
          <Route path="/logincliente" element={<LoginCliente />} />
          <Route path="/logincliente/reformas" element={<PaginaClienteReformas />} />
          <Route path="/logincliente/beleza" element={<PaginaClienteBeleza />} />
          <Route path="/logincliente/auto" element={<PaginaClienteAuto />} />
          <Route path="/logincliente/assistencia" element={<PaginaClienteAssistencia />} />
          <Route path="/logincliente/alimentos" element={<PaginaClienteAlimentos />} />
          <Route path="/logincliente/programacao" element={<PaginaClienteProgramacao />} />
          <Route path="/logincliente/limpeza" element={<PaginaClienteLimpeza />} />
          <Route path="/logincliente/design" element={<PaginaClienteDesign />} />
          <Route path="/logincliente/comercio" element={<PaginaClienteComercio />} />
          <Route path="/logincliente/moda" element={<PaginaClienteModa />} />
          <Route path="/logincliente/meusdados" element={<MeusDados />} />
        </Routes>
      </Router>

    </div>
  )
};

export default App;



