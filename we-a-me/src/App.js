import  "./App.css";
import Categorias from "./Paginas/Categorias/Categorias";
import SobreNos from "./Paginas/SobreNos/SobreNos";
import { Footer } from "./components/Pages Componentes/Footer/footer";
import Index from "./Paginas/1-Index";
import NavBar from "./components/Pages Componentes/NavBar Input/navbar";
import { NavbarCategorias } from "./components/Pages Componentes/Navbar Categorias/NavbarCategorias";
import { NavBarIndex } from "./components/Pages Componentes/NavBar Index/NavBarIndex";


function App() {
  return (
    <div>
      {/* <NavBarIndex/> */}
      {/* <NavbarCategorias/> */}
      <Index/>
      {/* <Categorias/> */}
      {/* <SobreNos/> */}
      {/* <Footer/> */}
      {/* <NavBar /> */}
    
    </div>
  );
}

export default App;
