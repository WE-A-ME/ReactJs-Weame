import NavBarIndex from "./components/NavBarIndex/NavBarIndex";
import NavBar from "./components/NavBar/NavBar";
import NavbarCategorias from "./components/NavbarCategorias/NavbarCategorias";
import Categorias from "./Paginas/Categorias/Categorias";
import SobreNos from "./Paginas/SobreNos/SobreNos";
import Reformas from './pages/LoginCategorias/Reformas/LoginCategoriasReformas';
import index from "./Paginas/Index";
import Index from "./Paginas/Index";

function App() {
  return (
    <div>
      <NavBarIndex/>
      <Categorias/>
      <SobreNos/>
    </div>
  );
}

export default App;
