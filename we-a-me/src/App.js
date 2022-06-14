import  "./App.css";
import Categorias from "./Paginas/Categorias/Categorias";
import SobreNos from "./Paginas/SobreNos/SobreNos";
import { Footer } from "./components/Pages Componentes/Footer/footer";
import NavBar from "./components/Pages Componentes/navbar-input/navbar";
import { NavbarCategorias } from "./components/Pages Componentes/NavbarCategorias/NavbarCategorias";
import { NavBarIndex } from "./components/NavBarIndex/NavBarIndex";


function App() {
  return (
    <div>
      <NavBarIndex/>
      <NavbarCategorias/>
      {/* <Index/> */}
      {/* <Categorias/> */}
      {/* <SobreNos/> */}
      {/* <Footer/> */}
      {/* <NavBar /> */}
    
    </div>
  );
}

export default App;
