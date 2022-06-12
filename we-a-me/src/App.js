import NavBarIndex from "./components/NavBarIndex/NavBarIndex";
import NavBar from "./components/NavBar/NavBar";
import NavbarCategorias from "./components/NavbarCategorias/NavbarCategorias";
import Categorias from "./Paginas/Categorias/Categorias";
import SobreNos from "./Paginas/SobreNos/SobreNos";
import Reformas from './pages/LoginCategorias/Reformas/LoginCategoriasReformas';

function App() {
  return (
    <div>
      <NavBar/>
      <NavbarCategorias/>
      <Reformas/>
    </div>
  );
}

export default App;
