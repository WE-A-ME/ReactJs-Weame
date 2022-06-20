import './PaginaCliente.css'
import Profissinal1 from './img/imagem1.jpg'
import Profissinal2 from './img/imagem2.jpg'
import Profissinal3 from './img/imagem3.jpg'
import Profissinal4 from './img/imagem4.jpg'
import Profissinal5 from './img/imagem5.jpg'
import Profissinal6 from './img/imagem6.jpg'
import Profissinal7 from './img/imagem7.jpg'
import Profissinal8 from './img/imagem8.jpg'
import Profissinal9 from './img/imagem9.jpg'
import Comercio1 from './img/comercio1.jpg'
import Comercio2 from './img/comercio2.png'
import Comercio3 from './img/comercio3.jpg'
import Comercio4 from './img/comercio4.jpg'
import Comercio5 from './img/comercio5.jpg'
import Limpeza from './img/Limpeza.gif'
import Assistencia from './img/Assistência Técnica.gif'
import Programacao from './img/Programação.gif'
import Alimentos from './img/Alimentos.gif'
import Comercio from './img/Comércio.gif'
import NavBar from '../../Pages Componentes/NavBar Input/navbar'
import { NavbarCategorias } from '../../Pages Componentes/Navbar Categorias/NavbarCategorias'
import { Footer } from '../../Pages Componentes/Footer/footer'

export function PaginaCliente() {
    return (

        <div>
            <NavBar />
            <NavbarCategorias />

            <main className="main ">

                <div className="titulocliente">
                    <h2>Ultimos serviços</h2>
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
                                        <ul className="nav col-12 card-title">
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
                                <a href=""><img src={Profissinal2} className="card-img-top" alt="Foto da Denise Ferreira que trabalha na área de Programação" title="Denise Ferreira" id="imagemprof" /></a>
                                <div className="card-body" id="texto">
                                    <h5 className="card-title" id="nome">Denise Ferreira</h5>
                                    <p className="card-text" id="profissao">Programação</p>
                                    <div className="estrelasprof">
                                        <ul className="nav col-12 card-title">
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
                                <a href=""><img src={Profissinal3} className="card-img-top" alt="Foto da Graça de Jesus que trabalha na área de Limpeza" title="Graça de Jesus" id="imagemprof" /></a>
                                <div className="card-body" id="texto">
                                    <h5 className="card-title" id="nome">Graça de Jesus</h5>
                                    <p className="card-text" id="profissao">Limpeza</p>
                                    <div className="estrelasprof">
                                        <ul className="nav col-12 card-title">
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
                                <a href=""><img src={Profissinal4} className="card-img-top" alt="Foto da Jéssica Farias que trabalha na área de Manutenção de T.I" title="Jéssica Farias" id="imagemprof" /></a>
                                <div className="card-body" id="texto">
                                    <h5 className="card-title" id="nome">Jéssica Farias</h5>
                                    <p className="card-text" id="profissao">Manutenção de T.I</p>
                                    <div className="estrelasprof">
                                        <ul className="nav col-12 card-title">
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
                                <a href=""><img src={Profissinal5} className="card-img-top" alt="Foto da Danielly Silva que trabalha na área de Doces e Confeitaria" title="Danielly Silva" id="imagemprof" /></a>
                                <div className="card-body" id="texto">
                                    <h5 className="card-title" id="nome">Danielly Silva</h5>
                                    <p className="card-text" id="profissao">Doces e Confeitaria</p>
                                    <div className="estrelasprof">
                                        <ul className="nav col-12 card-title">
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


                        <div className="col-md-1">
                            <div className="card" id="cartaoprof">
                                <div className="btn-group botao" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn" id='botaoprof'><i className="fa-solid fa-angle-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="titulocliente">
                        <h2>Os serviços mais bem avaliados da sua região</h2>
                    </div>

                    <div className="container-fluid">
                        <div className="row justify-content-md-center align-items-center">

                            <div className="col-md-2">
                                <div className="card" id="cartaoprof">
                                    <a href=""><img src={Profissinal6} className="card-img-top" alt="Foto do Pedro Almeida que trabalha na área de Design de Sites" title="Pedro Almeida" id="imagemprof" /></a>
                                    <div className="card-body" id="texto">
                                        <h5 className="card-title" id="nome">Pedro Almeida</h5>
                                        <p className="card-text" id="profissao">Design de Sites</p>
                                        <div className="estrelasprof">
                                            <ul className="nav col-12 card-title">
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
                                    <a href=""><img src={Profissinal7} className="card-img-top" alt="Foto da Joice de Oliveira que trabalha na área de Fotografia" title="Joice de Oliveira" id="imagemprof" /></a>
                                    <div className="card-body" id="texto">
                                        <h5 className="card-title" id="nome">Joice de Oliveira</h5>
                                        <p className="card-text" id="profissao">Fotografia</p>
                                        <div className="estrelasprof">
                                            <ul className="nav col-12 card-title">
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
                                    <a href=""><img src={Profissinal8} className="card-img-top" alt="Foto da Maria Elisa que trabalha na área de Costura" title="Maria Elisa" id="imagemprof" /></a>
                                    <div className="card-body" id="texto">
                                        <h5 className="card-title" id="nome">Maria Elisa</h5>
                                        <p className="card-text" id="profissao">Costura</p>
                                        <div className="estrelasprof">
                                            <ul className="nav col-12 card-title">
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
                                    <a href=""><img src={Profissinal4} className="card-img-top" alt="Foto da Jéssica Farias que trabalha na área de Manutenção de T.I" title="Jéssica Farias" id="imagemprof" /></a>
                                    <div className="card-body" id="texto">
                                        <h5 className="card-title" id="nome">Jéssica Farias</h5>
                                        <p className="card-text" id="profissao">Manutenção de T.I</p>
                                        <div className="estrelasprof">
                                            <ul className="nav col-12 card-title">
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
                                    <a href=""><img src={Profissinal9} className="card-img-top" alt="Foto da Beatriz Santos que trabalha na área de Maquiagem" title="Beatriz Santos" id="imagemprof" /></a>
                                    <div className="card-body" id="texto">
                                        <h5 className="card-title" id="nome">Beatriz Santos</h5>
                                        <p className="card-text" id="profissao">Maquiagem</p>
                                        <div className="estrelasprof">
                                            <ul className="nav col-12 card-title">
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


                            <div className="col-md-1">
                                <div className="card" id="cartaoprof">
                                    <div className="btn-group botao" role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn" id="botaoprof"><i className="fa-solid fa-angle-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="titulocliente">
                        <h2>Comércios mais bem avaliados da sua região</h2>
                    </div>

                    <div className="container-fluid">
                        <div className="row justify-content-md-center align-items-center">

                            <div className="col-md-2">
                                <div className="card" id="cartaoprof">
                                    <a href=""><img src={Comercio1} className="card-img-top" alt="Logo do comércio da Padaria Pão bom" title="Padaria Pão bom" id="imagemprof" /></a>
                                    <div className="card-body" id="texto">
                                        <h5 className="card-title" id="nome">Padaria Pão Bom</h5>
                                        <p className="card-text" id="profissao">Comércio</p>
                                        <div className="estrelasprof">
                                            <ul className="nav col-12 card-title">
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
                                    <a href=""><img src={Comercio2} className="card-img-top" alt="Logo do comércio Pastelaria" title="Pastelaria" id="imagemprof" /></a>
                                    <div className="card-body" id="texto">
                                        <h5 className="card-title" id="nome">Pastelaria</h5>
                                        <p className="card-text" id="profissao">Comércio</p>
                                        <div className="estrelasprof">
                                            <ul className="nav col-12 card-title">
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
                                    <a href=""><img src={Comercio3} className="card-img-top" alt="Logo do comércio da Padaria Vitória" title="Padaria Vitória" id="imagemprof" /></a>
                                    <div className="card-body" id="texto">
                                        <h5 className="card-title" id="nome">Padaria Vitória</h5>
                                        <p className="card-text" id="profissao">Comércio</p>
                                        <div className="estrelasprof">
                                            <ul className="nav col-12 card-title">
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
                                    <a href=""><img src={Comercio4} className="card-img-top" alt="Logo do comércio da Bomboniere" title="Bomboniere" id="imagemprof" /></a>
                                    <div className="card-body" id="texto">
                                        <h5 className="card-title" id="nome">Bomboniere</h5>
                                        <p className="card-text" id="profissao">Comércio</p>
                                        <div className="estrelasprof">
                                            <ul className="nav col-12 card-title">
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
                                    <a href=""><img src={Comercio5} className="card-img-top" alt="Logo do comércio da Esfilharia" title="Esfilharia" id="imagemprof" /></a>
                                    <div className="card-body" id="texto">
                                        <h5 className="card-title" id="nome">Esfilharia</h5>
                                        <p className="card-text" id="profissao">Comércio</p>
                                        <div className="estrelasprof">
                                            <ul className="nav col-12 card-title">
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


                            <div className="col-md-1">
                                <div className="card" id="cartaoprof">
                                    <div className="btn-group botao" role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn" id="botaoprof"><i className="fa-solid fa-angle-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="titulocliente">
                        <h2>Categorias mais utilizadas por você:</h2>
                    </div>

                    <div className="container-fluid">
                        <div className="row justify-content-md-center align-items-center">

                            <div className="col-md-3">
                                <div className="card" id="cartaocat">
                                    <a href=""><img src={Limpeza} className="card-img-top" alt="Um gif de uma mulher com uma vassoura e um tira pó na mão" id="imagemcat" /></a>
                                    <div className="card-body" id="testocat">
                                        <h5 className="card-title" id="nome">Limpeza</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="card" id="cartaocat">
                                    <a href=""><img src={Assistencia} className="card-img-top" alt="Um gif de uma chave inglesa se mexendo" id="imagemcat" /></a>
                                    <div className="card-body" id="testocat">
                                        <h5 className="card-title" id="nome">Assistência Técnica</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="card" id="cartaocat">
                                    <a href=""><img src={Programacao} className="card-img-top" alt="Um gi de uma tela de um computador de mexendo e brilhando" id="imagemcat" /></a>
                                    <div className="card-body" id="testocat">
                                        <h5 className="card-title" id="nome">Programação</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-1">
                                <div className="card" id="cartaoprof">
                                    <div className="btn-group botao" role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn" id="botaocat"><i className="fa-solid fa-angle-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="titulocliente">
                        <h2>Categorias mais recomendas para você</h2>
                    </div>

                    <div className="container-fluid">
                        <div className="row justify-content-md-center align-items-center">

                            <div className="col-md-3">
                                <div className="card" id="cartaocat">
                                    <a href=""><img src={Limpeza} className="card-img-top" alt="Um gif de uma mulher com uma vassoura e um tira pó na mão se mexendo" id="imagemcat" /></a>
                                    <div className="card-body" id="testocat">
                                        <h5 className="card-title" id="nome">Limpeza</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="card" id="cartaocat">
                                    <a href=""><img src={Alimentos} className="card-img-top" alt="Um gif de uma prateleira cheio de alimentos se mexendo" id="imagemcat" /></a>
                                    <div className="card-body" id="testocat">
                                        <h5 className="card-title" id="nome">Alimentos</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="card" id="cartaocat">
                                    <a href=""><img src={Comercio} className="card-img-top" alt="Um gif de um carrinho de supermercado correndo" id="imagemcat" /></a>
                                    <div className="card-body" id="testocat">
                                        <h5 className="card-title" id="nome">Comércio</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-1">
                                <div className="card" id="cartaoprof">
                                    <div className="btn-group botao" role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn" id="botaocat"><i className="fa-solid fa-angle-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
}