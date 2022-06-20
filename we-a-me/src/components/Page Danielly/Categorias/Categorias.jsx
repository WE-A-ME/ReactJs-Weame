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
import Profissional1 from './img/profissional1.jpg'
import Profissional2 from './img/profissional2.jpg'
import Profissional3 from './img/profissional3.jpg'
import Profissional4 from './img/profissional4.jpg'
import Comercio1 from './img/comercio1.jpg'
import Comercio2 from './img/comercio2.jpg'
import Comercio3 from './img/comercio3.jpg'
import Comercio4 from './img/comercio4.jpg'
import './Categorias.css'
import { NavbarCategorias } from '../../Pages Componentes/Navbar Categorias/NavbarCategorias'
import { NavBarIndex } from '../../Pages Componentes/NavBar Index/NavBarIndex'
import { Footer } from '../../Pages Componentes/Footer/footer'


export function Categorias() {
    return (

        <div>

            <NavBarIndex />
            <NavbarCategorias />

            <main className="main--categorias">
                <div className="titulo">
                    <h2>Categorias</h2>
                </div>

                <div className="container-fluid">
                    <div className="row row-cols-1 row-cols-md-3 g-4 align-items-center">
                        <div className="col-md-2 align-items-center">
                            <div className="card" id="cartao">
                                <a href=""><img src={Reformas} className="card-img-top" id="imagem" /></a>
                                <h5 className="card-text" id="nome">Reformas e Reparo</h5>
                            </div>
                        </div>
                        <div className="col-md-2 align-items-center">
                            <div className="card" id="cartao">
                                <a href=""><img src={Saude} className="card-img-top" id="imagem" /></a>
                                <h5 className="card-text" id="nome">Saúde & Beleza</h5>
                            </div>
                        </div>
                        <div className="col-md-2 align-items-center">
                            <div className="card" id="cartao">
                                <a href=""><img src={Auto} className="card-img-top" id="imagem" /></a>
                                <h5 className="card-text" id="nome">Auto</h5>
                            </div>
                        </div>
                        <div className="col-md-2 align-items-center">
                            <div className="card" id="cartao">
                                <a href=""><img src={Assistência} className="card-img-top" id="imagem" /></a>
                                <h5 className="card-text" id="nome">Assistência Técnica</h5>
                            </div>
                        </div>
                        <div className="col-md-3 align-items-center">
                            <div className="card" id="cartao">
                                <a href=""><img src={Alimentos} className="card-img-top" id="imagem" /></a>
                                <h5 className="card-text" id="nome">Alimentos</h5>
                            </div>
                        </div>
                        <div className="col-md-2 align-items-center">
                            <div className="card" id="cartao">
                                <a href=""><img src={Programação} className="card-img-top" id="imagem" /></a>
                                <h5 className="card-text" id="nome">Programação</h5>
                            </div>
                        </div>
                        <div className="col-md-2 align-items-center">
                            <div className="card" id="cartao">
                                <a href=""><img src={Limpeza} class="card-img-top" id="imagem" /></a>
                                <h5 className="card-text" id="nome">Limpeza</h5>
                            </div>
                        </div>
                        <div className="col-md-2 align-items-center">
                            <div className="card" id="cartao">
                                <a href=""><img src={Artes} class="card-img-top" id="imagem" /></a>
                                <h5 className="card-text" id="nome">Artes & Design</h5>
                            </div>
                        </div>
                        <div className="col-md-2 align-items-center">
                            <div className="card" id="cartao">
                                <a href=""><img src={Comercio} className="card-img-top" id="imagem" /></a>
                                <h5 className="card-text" id="nome">Comércio</h5>
                            </div>
                        </div>
                        <div className="col-md-2 align-items-center">
                            <div className="card" id="cartao">
                                <a href=""><img src={Moda} className="card-img-top" id="imagem" /></a>
                                <h5 className="card-text" id="nome">Moda</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main--box--04">
                    <div className="main--box--04--title">
                        <h2>Profissionais Qualificados</h2>
                    </div>

                    <div className="main--box--circle--01">
                        <div className="circle">
                            <div><img src={Profissional1} alt="" id="imagensprofissionais" /></div>
                            <div className="card-title" id="nome">
                                <h5>Maria das Graças</h5>
                            </div>
                            <div className="circle--autonomo" id='profissao'>
                                <p>Costureira</p>
                            </div>
                        </div>

                        <div className="circle">
                            <div><img src={Profissional2} alt="" id="imagensprofissionais" /></div>
                            <div className="card-title" id="nome">
                                <h5>Antonio Bezerra</h5>
                            </div>
                            <div className="circle--autonomo" id='profissao'>
                                <p>Artesão</p>
                            </div>
                        </div>

                        <div className="circle">
                            <div><img src={Profissional3} alt="" id="imagensprofissionais" /></div>
                            <div className="card-title" id="nome">
                                <h5>José Vieira Silva</h5>
                            </div>
                            <div className="circle--autonomo" id='profissao'>
                                <p>Jardineiro</p>
                            </div>
                        </div>

                        <div className="circle">
                            <div><img src={Profissional4} alt="" id="imagensprofissionais" /></div>
                            <div className="card-title" id="nome">
                                <h5>Junior Gonçalves</h5>
                            </div>
                            <div className="circle--autonomo" id='profissao'>
                                <p>Cabeleleiro</p>
                            </div>
                        </div>
                    </div>


                    <div className="main--box--circle--01">
                        <div className="circle">
                            <div><img src={Comercio1} alt="" id="imagensprofissionais" /></div>
                            <div className="card-title" id="nome">
                                <h5>Super Pizza</h5>
                            </div>
                            <div className="circle--autonomo" id='profissao'>
                                <p>Pizzaria</p>
                            </div>
                        </div>

                        <div className="circle">
                            <div><img src={Comercio2} alt="" id="imagensprofissionais" /></div>
                            <div className="card-title" id="nome">
                                <h5>BarberShop</h5>
                            </div>
                            <div className="circle--autonomo" id='profissao'>
                                <p>Barbearia</p>
                            </div>
                        </div>

                        <div className="circle">
                            <div><img src={Comercio3} alt="" id="imagensprofissionais" /></div>
                            <div className="card-title" id="nome">
                                <h5>Pão Bom</h5>
                            </div>
                            <div className="circle--autonomo" id='profissao'>
                                <p>Padaria</p>
                            </div>
                        </div>

                        <div className="circle">
                            <div><img src={Comercio4} alt="" id="imagensprofissionais" /></div>
                            <div className="card-title" id="nome">
                                <h5>Big Lanches</h5>
                            </div>
                            <div className="circle--autonomo" id='profissao'>
                                <p>Lanchonete</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

        </div>

    );
}
