import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Index } from "./components/Pages Thiago/1-Index";
import { Categorias } from "./components/Page Danielly/Categorias/Categorias";
import { PaginaCliente } from "./components/Page Danielly/Pagina Inicial Cliente/PaginaCliente";
import { Reformas } from "./components/Page Danielly/LoginCategorias/Reformas/LoginCategoriasReformas";
import { Moda } from "./components/Page Mariana/Moda/LoginCategoriasModa";
import { Suporte } from "./components/Pages Thiago/4-Suporte/Suporte";
import { Contratos } from "./components/Page Geovanna/contratos/Contratos";
import { ComoAvaliar } from "./components/Page Geovanna/comoavaliar/ComoAvaliar";
import { ComoSerParceiro } from "./components/Page Geovanna/comoserparceiro/ComoSerParceiro";
import { OqVcP } from "./components/Page Geovanna/oqvcp/OqVcP";
import { SobreNos } from "./components/Page Danielly/SobreNos/SobreNos";
import { CadastroCliente } from "./components/Pages Thiago/2-CadastroCliente/cadastro";
import { LoginCliente } from "./components/Pages Thiago/3-LoginCliente/login";
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
import { CadastroEmpresa } from "./components/Page Hasan/cadastro-empresa/cadastroempresa";
import { PerfilProf } from "./components/Page Hasan/perfil-prof/perfilprof";
import { ComoFunciona } from "./components/Pages Eduarda/como-funciona/ComoFunciona";
import { ParaProfissionais } from "./components/Pages Eduarda/para-profissionais/para-profissionais"
import { Localizacao } from "./components/Page Danielly/Localização/Localizacao";
import { LocalizacaoCliente } from "./components/Page Danielly/Localização copy/Localizacao";
import { PerfilProfissional } from "./components/Page Hasan/perfil-prof copy/perfilprof";
import { PerfilUsuario } from "./components/Pages Thiago/5-PerfilCliente/PaginaUsuario";

function App() {
  return (
    <div >

      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/suporte" element={<Suporte />} />
          <Route path="/sobrenos" element={<SobreNos />} />
          <Route path="/contratos" element={<Contratos />} />
          <Route path="/comoavaliar" element={<ComoAvaliar />} />
          <Route path="/OqVcP" element={<OqVcP />} />
          <Route path="/comoserparceiro" element={<ComoSerParceiro />} />
          <Route path="/cadastrocliente" element={<CadastroCliente />} />


          <Route path="/categorias" element={<Categorias />} />
          <Route path="/categorias-reformas" element={<Reformas />} />
          <Route path="/categorias-beleza" element={<Beleza />} />
          <Route path="/categorias-auto" element={<Auto />} />
          <Route path="/categorias-assistencia" element={<Assistencia />} />
          <Route path="/categorias-alimentos" element={<Alimentos />} />
          <Route path="/categorias-programacao" element={<Programacao />} />
          <Route path="/categorias-limpeza" element={<Limpeza />} />
          <Route path="/categorias-design" element={<Design />} />
          <Route path="/categorias-comercio" element={<Comercio />} />
          <Route path="/categorias-moda" element={<Moda />} />
          <Route path="/logincliente" element={<LoginCliente />} />



          <Route path="/cadastroempresa" element={<CadastroEmpresa />} />
          <Route path="/categorias-reformas-perfilprof" element={<PerfilProf />} />
          <Route path="/paraprofissionais" element={<ParaProfissionais />} />
          <Route path="/comofunciona" element={<ComoFunciona />} />
          <Route path="/cadastroempresa-localizacao" element={<Localizacao />} />
          <Route path="/cadastrocliente-localizacao" element={<LocalizacaoCliente />} />

          {/* Paginas depois de ter feito o login */}

          <Route path="/paginacliente" element={<PaginaCliente />} />
          <Route path="/paginacliente-reformas" element={<PaginaClienteReformas />} />
          <Route path="/paginacliente-beleza" element={<PaginaClienteBeleza />} />
          <Route path="/paginacliente-auto" element={<PaginaClienteAuto />} />
          <Route path="/paginacliente-assistencia" element={<PaginaClienteAssistencia />} />
          <Route path="/paginacliente-alimentos" element={<PaginaClienteAlimentos />} />
          <Route path="/paginacliente-programacao" element={<PaginaClienteProgramacao />} />
          <Route path="/paginacliente-limpeza" element={<PaginaClienteLimpeza />} />
          <Route path="/paginacliente-design" element={<PaginaClienteDesign />} />
          <Route path="/paginacliente-comercio" element={<PaginaClienteComercio />} />
          <Route path="/paginacliente-moda" element={<PaginaClienteModa />} />
          <Route path="/paginacliente-reformas-perfil" element={<PerfilProfissional />} />
          <Route path="/paginacliente-perfil-usuario" element={<PerfilUsuario/>}/>

          
        </Routes>
      </Router>

    </div>
  )
};

export default App;



