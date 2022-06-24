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

export function PaginaClienteReformas() {
    return (

        <div>
            <NavBar />
            <NavbarCategoriasLogin />

            <main className="main ">

                <div className="titulocliente">
                    <h2>Reformas e reparo na sua região</h2>
                </div>

                <div className="container-fluid">
                    <div className="row justify-content-md-center align-items-center">

                        <div className="col-md-2">
                            <div className="card" id="cartaoprof">
                                <a href=""><img src={Profissinal1} className="card-img-top" alt="Foto do Jorge dos Santos que trabalha na área de Reformas e Reparo" title="Jorge dos Santos" id="imagemprof" /></a>
                                <div className="card-body" id="texto">
                                    <h5 className="card-title" id="nome">Jorge dos Santos</h5>
                                    <p className="card-text" id="profissao">Reformas e Reparo</p>
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
                                <a href=""><img src={Profissinal2} className="card-img-top" alt="Foto da Denise Ferreira que trabalha na área de Programação" title="Bárbara Martins" id="imagemprof" /></a>
                                <div className="card-body" id="texto">
                                    <h5 className="card-title" id="nome">Bárbara Martins</h5>
                                    <p className="card-text" id="profissao">Manutenção Mecânica</p>
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
                                <a href=""><img src={Profissinal3} className="card-img-top" alt="Foto da Graça de Jesus que trabalha na área de Limpeza" title="Pedro Lacerda Junior" id="imagemprof" /></a>
                                <div className="card-body" id="texto">
                                    <h5 className="card-title" id="nome">Pedro Lacerda Junior</h5>
                                    <p className="card-text" id="profissao">Empreiteiro</p>
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
                                <a href=""><img src={Profissinal4} className="card-img-top" alt="Foto da Jéssica Farias que trabalha na área de Manutenção de T.I" title="Denise Ferreira" id="imagemprof" /></a>
                                <div className="card-body" id="texto">
                                    <h5 className="card-title" id="nome">Denise Ferreira</h5>
                                    <p className="card-text" id="profissao">Mecânica</p>
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
                                <a href=""><img src={Profissinal5} className="card-img-top" alt="Foto da Danielly Silva que trabalha na área de Doces e Confeitaria" title="Miguel Silva" id="imagemprof" /></a>
                                <div className="card-body" id="texto">
                                    <h5 className="card-title" id="nome">Miguel Silva</h5>
                                    <p className="card-text" id="profissao">Pintor</p>
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
                                    <a href=""><img src={Profissinal6}  className="card-img-top" alt="Foto do Pedro Almeida que trabalha na área de Design de Sites" title="José Augusto" id="imagemprof" /></a>
                                    <div className="card-body" id="texto">
                                        <h5 className="card-title" id="nome">José Augusto</h5>
                                        <p className="card-text" id="profissao">Pedreiro</p>
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
                                    <a href=""><img src={Profissinal4} className="card-img-top" alt="Foto da Joice de Oliveira que trabalha na área de Fotografia" title="Joice de Oliveira" id="imagemprof" /></a>
                                    <div className="card-body" id="texto">
                                        <h5 className="card-title" id="nome">Denise Ferreira</h5>
                                        <p className="card-text" id="profissao">Mecânica</p>
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
                                    <a href=""><img src={Profissinal1}  className="card-img-top" alt="Foto da Maria Elisa que trabalha na área de Costura" title="Jorge dos Santos" id="imagemprof" /></a>
                                    <div className="card-body" id="texto">
                                        <h5 className="card-title" id="nome">Jorge dos Santos</h5>
                                        <p className="card-text" id="profissao">Reformas e Reparo</p>
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
                                    <a href=""><img src={Profissinal7}  className="card-img-top" alt="Foto da Jéssica Farias que trabalha na área de Manutenção de T.I" title="Danilo dos Anjos" id="imagemprof" /></a>
                                    <div className="card-body" id="texto">
                                        <h5 className="card-title" id="nome">Danilo dos Anjos</h5>
                                        <p className="card-text" id="profissao">Pedreiro</p>
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
                                    <a href=""><img src={Profissinal3} className="card-img-top" alt="Foto da Beatriz Santos que trabalha na área de Maquiagem" title="Pedro Lacerda Junior" id="imagemprof" /></a>
                                    <div className="card-body" id="texto">
                                        <h5 className="card-title" id="nome">Pedro Lacerda Junior</h5>
                                        <p className="card-text" id="profissao">Empreiteiro</p>
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