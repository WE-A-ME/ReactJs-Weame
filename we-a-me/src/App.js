import  "./App.css";
import { NavBarIndex } from "./components/Pages Componentes/NavBar Index/NavBarIndex";
import { NavbarCategorias } from "./components/Pages Componentes/Navbar Categorias/NavbarCategorias";
import {  Categorias} from "./Paginas/Categorias/Categorias";
import {Index} from "./components/Pages Thiago/1-Index/index";
import { CadastroEmpresa } from "./LogineCadastro/CadastroCliente/cadastro";

function App() {
  return (
    <div>
      {/* <NavBarIndex/> */}
      {/* <NavbarCategorias/> */}
      {/* <Index/> */}
      {/* <Categorias/> */}
      <CadastroEmpresa/>
    </div>
  );
}

export default App;
