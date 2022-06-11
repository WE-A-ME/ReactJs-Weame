import React from 'react';
import NavBarIndex from "./components/NavBarIndex/NavBarIndex";
import Categorias from "./Paginas/Categorias/Categorias";
import SobreNos from "./Paginas/SobreNos/SobreNos";

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
