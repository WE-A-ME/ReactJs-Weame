import  "./App.css";
import { NavBarIndex } from "./components/Pages Componentes/NavBar Index/NavBarIndex";
import { Footer } from "./components/Pages Componentes/Footer/footer";
import { NavbarCategorias } from "./components/Pages Componentes/Navbar Categorias/NavbarCategorias";
import {  Categorias} from "./Paginas/Categorias/Categorias";
import SobreNos from "./Paginas/SobreNos/SobreNos";
import {Index} from "./components/Pages Thiago/1-Index/index";
import { CadastroEmpresa } from "./LogineCadastro/CadastroCliente/cadastro";


function App() {
  return (
    <div>
        <NavBarIndex/> 
        <Index/> 
        <Categorias/> 
        <SobreNos/>
        <Footer/>
    </div>
  );
}

export default App;
