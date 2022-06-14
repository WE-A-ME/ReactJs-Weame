import NavBarIndex from "./components/NavBarIndex/NavBarIndex";
import NavBar from "./components/NavBar/NavBar";
import NavbarCategorias from "./components/NavbarCategorias/NavbarCategorias";
import Categorias from "./Paginas/Categorias/Categorias";
import SobreNos from "./Paginas/SobreNos/SobreNos";
import { Footer } from "./components/Footer/footer";
import Index from "./Paginas/Index";


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
