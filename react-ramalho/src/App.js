import './App.css';
import { ComoAvaliar } from './components/comoavaliar/ComoAvaliar'
import { OqVcP } from './components/oqvcp/OqVcP'
import { ComoSerParceiro} from './components/comoserparceiro/ComoSerParceiro'
import { Contratos } from './components/contratos/Contratos'

function App() {
  return (
    <div>
        <ComoAvaliar/>
        <OqVcP/>
        <ComoSerParceiro/>
        <Contratos/>

    </div>
  );
}

export default App;
