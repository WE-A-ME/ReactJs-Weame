import './PaginaCliente.css'
import Profissinal1 from './img/imagemprofissional.jpg'
import Profissinal2 from './img/imagemprofissional2.jpg'
import Profissinal3 from './img/imagemprofissional3.jpg'
import Profissinal4 from './img/imagemprofissional4.jpg'
import Profissinal5 from './img/imagemprofissional5.jpg'
import Profissinal6 from './img/imagemprofissional6.jpg'
import Profissinal7 from './img/imagemprofissional7.jpg'
import NavBar from '../../../../Pages Componentes/NavBar Input/navbar'
import { Footer } from '../../../../Pages Componentes/Footer/footer'
import { NavbarCategoriasLogin } from '../../../../Pages Componentes/Navbar Categorias copy/NavbarCategoriasLogin'

export function PaginaClienteAssistencia() {
    return (

        <div>
            <NavBar />
            <NavbarCategoriasLogin />

            <main className="main ">

                <div className="titulocliente">
                    <h2>Assistência Técnica na sua região</h2>
                </div>

                <div className="container-fluid">
                    <div className="row justify-content-md-center align-items-center">

                        <div className="col-md-2">
                            <div className="card" id="cartaoprof">
                                <a href=""><img src={Profissinal1} className="card-img-top" alt="Foto do Jorge dos Santos que trabalha na área de Reformas e Reparo" title="Rafael Miguel" id="imagemprof" /></a>
                                <div className="card-body" id="texto">
                                    <h5 className="card-title" id="nome">Rafael Miguel</h5>
                                    <p className="card-text" id="profissao">Manutenção de TI</p>
                                    <div className="estrelasprof">
                                        <ul className="nav col-12 card-title justify-content-md-center">
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="card" id="cartaoprof">
                                <a href=""><img src={Profissinal2} className="card-img-top" alt="Foto da Denise Ferreira que trabalha na área de Programação" title="Lennon Faveri" id="imagemprof" /></a>
                                <div className="card-body" id="texto">
                                    <h5 className="card-title" id="nome">Lennon Faveri</h5>
                                    <p className="card-text" id="profissao">
                                        Assistência de Celular</p>
                                    <div className="estrelasprof">
                                        <ul className="nav col-12 card-title justify-content-md-center">
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="card" id="cartaoprof">
                                <a href=""><img src={Profissinal3} className="card-img-top" alt="Foto da Graça de Jesus que trabalha na área de Limpeza" title="Leornado Cabral" id="imagemprof" /></a>
                                <div className="card-body" id="texto">
                                    <h5 className="card-title" id="nome">Leornado Cabral</h5>
                                    <p className="card-text" id="profissao">Manutenção de TI</p>
                                    <div className="estrelasprof">
                                        <ul className="nav col-12 card-title justify-content-md-center">
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="card" id="cartaoprof">
                                <a href=""><img src={Profissinal4} className="card-img-top" alt="Foto da Jéssica Farias que trabalha na área de Manutenção de T.I" title="Lisa Duarte" id="imagemprof" /></a>
                                <div className="card-body" id="texto">
                                    <h5 className="card-title" id="nome">Lisa Duarte</h5>
                                    <p className="card-text" id="profissao">Assistência de Celular</p>
                                    <div className="estrelasprof">
                                        <ul className="nav col-12 card-title justify-content-md-center">
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="card" id="cartaoprof">
                                <a href=""><img src={Profissinal5} className="card-img-top" alt="Foto da Danielly Silva que trabalha na área de Doces e Confeitaria" title="Fabiana Amaro" id="imagemprof" /></a>
                                <div className="card-body" id="texto">
                                    <h5 className="card-title" id="nome">Fabiana Amaro</h5>
                                    <p className="card-text" id="profissao">Manutenção de TI</p>
                                    <div className="estrelasprof">
                                        <ul className="nav col-12 card-title justify-content-md-center">
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-1">
                            <div className="card" id="cartaoprof">
                                <div className="btn-group botao" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn" id='botaoprof'><i className="fa-solid fa-angle-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="titulocliente">
                        <h2>Os serviços mais bem avaliados</h2>
                    </div>

                    <div className="container-fluid">
                        <div className="row justify-content-md-center align-items-center">

                            <div className="col-md-2">
                                <div className="card" id="cartaoprof">
                                    <a href=""><img src={Profissinal6} className="card-img-top" alt="Foto do Pedro Almeida que trabalha na área de Design de Sites" title="Gustavo Lima" id="imagemprof" /></a>
                                    <div className="card-body" id="texto">
                                        <h5 className="card-title" id="nome">Gustavo Lima</h5>
                                        <p className="card-text" id="profissao">Manutenção de Celular</p>
                                        <div className="estrelasprof">
                                            <ul className="nav col-12 card-title justify-content-md-center">
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-2">
                                <div className="card" id="cartaoprof">
                                    <a href=""><img src={Profissinal4} className="card-img-top" alt="Foto da Joice de Oliveira que trabalha na área de Fotografia" title="Lisa Duarte" id="imagemprof" /></a>
                                    <div className="card-body" id="texto">
                                        <h5 className="card-title" id="nome">Lisa Duarte</h5>
                                        <p className="card-text" id="profissao">Assistência de Celular</p>
                                        <div className="estrelasprof">
                                            <ul className="nav col-12 card-title justify-content-md-center">
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-2">
                                <div className="card" id="cartaoprof">
                                    <a href=""><img src={Profissinal1} className="card-img-top" alt="Foto da Maria Elisa que trabalha na área de Costura" title="Rafael Miguel" id="imagemprof" /></a>
                                    <div className="card-body" id="texto">
                                        <h5 className="card-title" id="nome">Rafael Miguel</h5>
                                        <p className="card-text" id="profissao">Manutenção de TI</p>
                                        <div className="estrelasprof">
                                            <ul className="nav col-12 card-title justify-content-md-center">
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-2">
                                <div className="card" id="cartaoprof">
                                    <a href=""><img src={Profissinal7} className="card-img-top" alt="Foto da Jéssica Farias que trabalha na área de Manutenção de T.I" title="Vitoria Marcos" id="imagemprof" /></a>
                                    <div className="card-body" id="texto">
                                        <h5 className="card-title" id="nome">Vitoria Marcos</h5>
                                        <p className="card-text" id="profissao">Assistência de Celular</p>
                                        <div className="estrelasprof">
                                            <ul className="nav col-12 card-title justify-content-md-center">
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-2">
                                <div className="card" id="cartaoprof">
                                    <a href=""><img src={Profissinal3} className="card-img-top" alt="Foto da Beatriz Santos que trabalha na área de Maquiagem" title="Leornado Cabral" id="imagemprof" /></a>
                                    <div className="card-body" id="texto">
                                        <h5 className="card-title" id="nome">Leornado Cabral</h5>
                                        <p className="card-text" id="profissao">Manutenção de TI</p>
                                        <div className="estrelasprof">
                                            <ul className="nav col-12 card-title justify-content-md-center">
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-1">
                                <div className="card" id="cartaoprof">
                                    <div className="btn-group botao" role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn" id="botaoprof"><i className="fa-solid fa-angle-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}