import "./App.css";
import { NavBarIndex } from "./components/Pages Componentes/NavBar Index/NavBarIndex";
import { Footer } from "./components/Pages Componentes/Footer/footer";
import { NavbarCategorias } from "./components/Pages Componentes/Navbar Categorias/NavbarCategorias";
import { Categorias } from "./components/Page Danielly/Categorias/Categorias";
import { Suporte } from "./components/Pages Thiago/Suporte/Suporte";
import SobreNos from "./components/Page Danielly/SobreNos/SobreNos";
import { Index } from "./components/Pages Thiago/1-Index/index";
import { CadastroCliente } from "./components/Pages Thiago/CadastroCliente/cadastro";
import { Reformas } from "./components/Page Danielly/LoginCategorias/Reformas/LoginCategoriasReformas";
import { PaginaCliente } from "./components/Page Danielly/Pagina Inicial Cliente/PaginaCliente";


function App() {
  return (
    <div>
      {/* <NavBarIndex/> OK  */}
       {/* <Index/>  */}
      {/* <CadastroCliente/> OK */}
       <Categorias/> 
      {/* <Suporte/> OK */}
      {/* <SobreNos/> Detalhar  */}
      {/* <Reformas/> */}
      {/* <Footer/> OK */}
       <PaginaCliente/> 
    </div>
  );
}

export default App;
