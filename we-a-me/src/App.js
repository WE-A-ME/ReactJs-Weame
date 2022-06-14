import  "./App.css";
import { NavBarIndex } from "./components/Pages Componentes/NavBar Index/NavBarIndex";
import { NavbarCategorias } from "./components/Pages Componentes/Navbar Categorias/NavbarCategorias";
import {  Categorias} from "./Paginas/Categorias/Categorias";
import {Index} from "./components/Pages Thiago/1-Index/index";

function App() {
  return (
    <div>
      <NavBarIndex/>
      <NavbarCategorias/>
      <Index/>
      <Categorias/>
    </div>
  );
}

export default App;
