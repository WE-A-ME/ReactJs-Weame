import './Categorias.css'
import Reformas from './img/Reformas e reparos.gif'
import Alimentos from './img/Alimentos.gif'
import Artes from './img/Artes e Design.gif'
import Assistência from './img/Assistência Técnica.gif'
import Auto from './img/Auto.gif'
import Comercio from './img/Comércio.gif'
import Limpeza from './img/Limpeza.gif'
import Moda from './img/Moda.gif'
import Programação from './img/Programação.gif'
import Saude from './img/Beleza.gif'
import './Categorias.css'


function Categorias() {
    return (

    <main className="main">
        <div className="titulo">
            <h2>Categorias</h2>
        </div>
    
        <div className="container-fluid">
            <div className="row row-cols-1 row-cols-md-3 g-4 align-items-center">
                <div className="col-md-2 align-items-center">
                    <div className="card"  id="cartao">
                    <a href=""><img src={Reformas} className="card-img-top" id="imagem"/></a>
                    <h5 className="card-text" id="nome">Reformas e Reparo</h5>
                    </div>
                </div>

                <div className="col-md-2 align-items-center">
                    <div className="card"  id="cartao">
                    <a href=""><img src={Saude} className="card-img-top" id="imagem"/></a>
                    <h5 className="card-text" id="nome">Saúde & Beleza</h5>
                    </div>
                </div>

                <div className="col-md-2 align-items-center">
                    <div className="card"  id="cartao">
                    <a href=""><img src={Auto} className="card-img-top" id="imagem"/></a>
                    <h5 className="card-text" id="nome">Auto</h5>
                    </div>
                </div>

                <div className="col-md-2 align-items-center">
                    <div className="card"  id="cartao">
                    <a href=""><img src={Assistência} className="card-img-top" id="imagem"/></a>
                    <h5 className="card-text" id="nome">Assistência Técnica</h5>
                    </div>
                </div>

                <div className="col-md-3 align-items-center">
                    <div className="card"  id="cartao">
                    <a href=""><img src={Alimentos} className="card-img-top" id="imagem"/></a>
                    <h5 className="card-text" id="nome">Alimentos</h5>
                    </div>
                </div>

                <div className="col-md-2 align-items-center">
                    <div className="card"  id="cartao">
                    <a href=""><img src={Programação} className="card-img-top" id="imagem"/></a>
                    <h5 className="card-text" id="nome">Programação</h5>
                    </div>
                </div>

                <div className="col-md-2 align-items-center">
                    <div className="card"  id="cartao">
                    <a href=""><img src={Limpeza} class="card-img-top" id="imagem"/></a>
                    <h5 className="card-text" id="nome">Limpeza</h5>
                    </div>
                </div>

                <div className="col-md-2 align-items-center">
                    <div className="card"  id="cartao">
                    <a href=""><img src={Artes} class="card-img-top" id="imagem"/></a>
                    <h5 className="card-text" id="nome">Artes & Design</h5>
                    </div>
                </div>

                <div className="col-md-2 align-items-center">
                    <div className="card"  id="cartao">
                    <a href=""><img src={Comercio} className="card-img-top" id="imagem"/></a>
                    <h5 className="card-text" id="nome">Comércio</h5>
                    </div>
                </div>

                <div className="col-md-2 align-items-center">
                    <div className="card"  id="cartao">
                    <a href=""><img src={Moda} className="card-img-top" id="imagem"/></a>
                    <h5 className="card-text" id="nome">Moda</h5>
                    </div>
                </div>

            </div>
        </div>
    </main>

    );
  }
  
  export default Categorias;
  