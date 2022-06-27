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
import { Link } from "react-router-dom";


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
                                <Link to='/categorias/reformas'><img src={Reformas} className="card-img-top" id="imagem" /></Link>
                                <h5 className="card-text" id="nome">Reformas e Reparo</h5>
                            </div>
                        </div>
                        <div className="col-md-2 align-items-center">
                            <div className="card" id="cartao">
                              <Link to='/categorias/beleza'><img src={Saude} className="card-img-top" id="imagem" /></Link>
                                <h5 className="card-text" id="nome">Saúde & Beleza</h5>
                            </div>
                        </div>
                        <div className="col-md-2 align-items-center">
                            <div className="card" id="cartao">
                            <Link to='/categorias/auto'><img src={Auto} className="card-img-top" id="imagem" /></Link>
                                <h5 className="card-text" id="nome">Auto</h5>
                            </div>
                        </div>
                        <div className="col-md-2 align-items-center">
                            <div className="card" id="cartao">
                            <Link to='/categorias/assistencia'><img src={Assistência} className="card-img-top" id="imagem" /></Link>
                                <h5 className="card-text" id="nome">Assistência Técnica</h5>
                            </div>
                        </div>
                        <div className="col-md-3 align-items-center">
                            <div className="card" id="cartao">
                               <Link to='/categorias/Alimentos'><img src={Alimentos} className="card-img-top" id="imagem" /></Link>
                                <h5 className="card-text" id="nome">Alimentos</h5>
                            </div>
                        </div>
                        <div className="col-md-2 align-items-center">
                            <div className="card" id="cartao">
                                <Link to="/categorias/Programacao"><img src={Programação} className="card-img-top" id="imagem" /></Link>
                                <h5 className="card-text" id="nome">Programação</h5>
                            </div>
                        </div>
                        <div className="col-md-2 align-items-center">
                            <div className="card" id="cartao">
                                <Link to="/categorias/Limpeza"><img src={Limpeza} class="card-img-top" id="imagem" /></Link>
                                <h5 className="card-text" id="nome">Limpeza</h5>
                            </div>
                        </div>
                        <div className="col-md-2 align-items-center">
                            <div className="card" id="cartao">
                                <Link to="/categorias/Design"><img src={Artes} class="card-img-top" id="imagem" /></Link>
                                <h5 className="card-text" id="nome">Artes & Design</h5>
                            </div>
                        </div>
                        <div className="col-md-2 align-items-center">
                            <div className="card" id="cartao">
                                <Link to="/categorias/Comercio"><img src={Comercio} className="card-img-top" id="imagem" /></Link>
                                <h5 className="card-text" id="nome">Comércio</h5>
                            </div>
                        </div>
                        <div className="col-md-2 align-items-center">
                            <div className="card" id="cartao">
                                <Link to="/categorias/moda"><img src={Moda} className="card-img-top" id="imagem" /></Link>
                                <h5 className="card-text" id="nome">Moda</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="titulo">
                    <h2>Profissionais qualificados</h2>
                </div>

                <div className="container-fluid">
                    <div className="row justify-content-md-center align-items-center">

                        <div className='col-md-2'></div>

                        <div className="col-md-2">
                            <div className="card" id="cartaogorias">
                                <a href=""><img src={Profissional1} className="card-img-top" alt="Foto do Jorge dos Santos que trabalha na área de Reformas e Reparo" title="Jorge dos Santos" id='imagensprofissionais' /></a>
                                <div className="card-body" id="texto">
                                    <h5 className="card-title" id="nome">Maria das Graças</h5>
                                    <p className="card-text" id="profissao">Costureira</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="card" id="cartaogorias">
                                <a href=""><img src={Profissional2} className="card-img-top" alt="Foto da Denise Ferreira que trabalha na área de Programação" title="Denise Ferreira" id='imagensprofissionais' /></a>
                                <div className="card-body" id="texto">
                                    <h5 className="card-title" id="nome">Antonio Bezerra</h5>
                                    <p className="card-text" id="profissao">Artesão</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="card" id="cartaogorias">
                                <a href=""><img src={Profissional3} className="card-img-top" alt="Foto da Graça de Jesus que trabalha na área de Limpeza" title="Graça de Jesus" id='imagensprofissionais' /></a>
                                <div className="card-body" id="texto">
                                    <h5 className="card-title" id="nome">José Vieira Silva</h5>
                                    <p className="card-text" id="profissao">Jardineiro</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="card" id="cartaogorias">
                                <a href=""><img src={Profissional4} className="card-img-top" alt="Foto do Jorge dos Santos que trabalha na área de Reformas e Reparo" title="Jorge dos Santos" id='imagensprofissionais'/></a>
                                <div className="card-body" id="texto">
                                    <h5 className="card-title" id="nome">Jorge dos Santos</h5>
                                    <p className="card-text" id="profissao">Reformas e Reparo</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-2'></div>

                        <div className="col-md-2">
                            <div className="card" id="cartaogorias">
                                <a href=""><img src={Comercio1} className="card-img-top" alt="Foto do Jorge dos Santos que trabalha na área de Reformas e Reparo" title="Jorge dos Santos" id='imagensprofissionais' /></a>
                                <div className="card-body" id="texto">
                                    <h5 className="card-title" id="nome">Super Pizza</h5>
                                    <p className="card-text" id="profissao">Pizzaria</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="card" id="cartaogorias">
                                <a href=""><img src={Comercio2} className="card-img-top" alt="Foto do Jorge dos Santos que trabalha na área de Reformas e Reparo" title="Jorge dos Santos" id='imagensprofissionais'/></a>
                                <div className="card-body" id="texto">
                                    <h5 className="card-title" id="nome">BarberShop</h5>
                                    <p className="card-text" id="profissao">Barbearia</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="card" id="cartaogorias">
                                <a href=""><img src={Comercio3} className="card-img-top" alt="Foto do Jorge dos Santos que trabalha na área de Reformas e Reparo" title="Jorge dos Santos" id='imagensprofissionais' /></a>
                                <div className="card-body" id="texto">
                                    <h5 className="card-title" id="nome">Pão Bom</h5>
                                    <p className="card-text" id="profissao">Padaria</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="card" id="cartaogorias">
                                <a href=""><img src={Comercio4} className="card-img-top" alt="Foto do Jorge dos Santos que trabalha na área de Reformas e Reparo" title="Jorge dos Santos" id='imagensprofissionais' /></a>
                                <div className="card-body" id="texto">
                                    <h5 className="card-title" id="nome">Big Lanches</h5>
                                    <p className="card-text" id="profissao">Lanchonete</p>
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
