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
import Comercio1 from './img/comercio1.png'
import Comercio2 from './img/comercio2.png'
import Comercio3 from './img/comercio3.png'
import Comercio4 from './img/comercio4.png'
import Profissional1 from './img/profissional1.png'
import Profissional2 from './img/profissional2.png'
import Profissional3 from './img/profissional3.png'
import Profissional4 from './img/profissional4.png'
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

        <div className="main--box--04">
                <div className="main--box--04--title">
                    <h2>Profissionais qualificados</h2>
                </div>
       
                <div className="main--box--circle--01">
                    <div className="circle">
                        <div><img src={Comercio1} alt="" /></div>
                        <div className="circle--name">
                            <h2>José Vieira Silva</h2>
                        </div>
                        <div className="circle--autonomo">
                            <p>Jardineiro</p>
                        </div>
                    </div>
       
                    <div className="circle">
                        <div><img src={Comercio2} alt="" /></div>
                        <div className="circle--name">
                            <h2>Antonio Bezerra</h2>
                        </div>
                        <div className="circle--autonomo">
                            <p>Artesão</p>
                        </div>
                    </div>
       
                    <div className="circle">
                        <div><img src={Comercio3} alt="" /></div>
                        <div className="circle--name">
                            <h2>Junior Gonçalves</h2>
                        </div>
                        <div className="circle--autonomo">
                            <p>Cabeleleiro</p>
                        </div>
                    </div>
       
                    <div className="circle">
                        <div><img src={Profissional1} alt="" /></div>
                        <div className="circle--name">
                            <h2>Maria das Graças</h2>
                        </div>
                        <div className="circle--autonomo">
                            <p>Costureira</p>
                        </div>
                    </div>
                </div>
       
       
                <div className="main--box--circle--01">
                    <div className="circle">
                        <div><img src={Profissional2} alt="" /></div>
                        <div className="circle--name">
                            <h2>Circo´s Store</h2>
                        </div>
                        <div className="circle--autonomo">
                            <p>Comércio</p>
                        </div>
                    </div>
       
                    <div className="circle">
                        <div><img src={Profissional3} alt="" /></div>
                        <div className="circle--name">
                            <h2>Deli Mark</h2>
                        </div>
                        <div className="circle--autonomo">
                            <p>Barbearia</p>
                        </div>
                    </div>
       
                    <div className="circle">
                        <div><img src={Profissional4} alt="" /></div>
                        <div className="circle--name">
                            <h2>Tony´ps</h2>
                        </div>
                        <div className="circle--autonomo">
                            <p>Pizzaria</p>
                        </div>
                    </div>
       
                    <div className="circle">
                        <div><img src={Comercio4} alt="" /></div>
                        <div className="circle--name">
                            <h2>Betty´s Burguers</h2>
                        </div>
                        <div className="circle--autonomo">
                            <p>Lanchonete</p>
                        </div>
                    </div>
                </div>
            </div>
    </main>

    );
  }
  
  export default Categorias;
  