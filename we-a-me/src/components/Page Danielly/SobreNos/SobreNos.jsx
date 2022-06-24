import './SobreNos.css'
import Danielly from './fotos/Danielly.jpg'
import Hasan from './fotos/Hasan.jpg'
import Lennon from './fotos/Lennon.jpg'
import Mariana from './fotos/Mariana.jpg'
import Geovanna from './fotos/Geovanna.jpg'
import Thiago from './fotos/Thiago.png'
import Eduarda from './fotos/Eduarda.jpg'
import { Footer } from '../../Pages Componentes/Footer/footer'
import { NavBarIndex } from '../../Pages Componentes/NavBar Index/NavBarIndex'

export function SobreNos() {
    return (

        <div>

            <NavBarIndex />

            <main className="main ">

                <div className="titulosobrenos">
                    <h2>Sobre Nós</h2>
                </div>

                <div className="container">
                    <div className="row row-cols-1 row-cols-md-4 g-4 align-items-center">
                        <div className="col-md-3">
                            <div className="card" id="cartao2">
                                <img src={Danielly} className="card-img-top" alt="Foto da aluna do Instituto Proa chamada Danielly Alves Silva" title="Danielly Alves Silva" id="imagem2" />
                                <div className="card-body" id="texto">
                                    <h5 className="card-title" id="nome">Danielly Silva</h5>
                                    <p className="card-title"id="profissao">Desenvolvedora Front-End</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div class="card" id="cartao2">
                                <img src={Hasan} className="card-img-top" alt="Foto do aluno do Instituto Proa chamado Hasan Basam de Souza Dahbur" title="Hasan Basam de Souza Dahbur" id="imagem2" />
                                <div className="card-body" id="texto">
                                    <h5 className="card-title" id="nome">Hasan Basam</h5>
                                    <p className="card-text" id="profissao">Desenvolvedor Full-Stack</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card" id="cartao2">
                                <img src={Lennon} className="card-img-top" alt="Foto do aluno do Instituto Proa chamado Lennon de Oliveira Manholeto" title="Lennon de Oliveira Manholeto" id="imagem2" />
                                <div className="card-body" id="texto">
                                    <h5 className="card-title" id="nome">Lennon Manholeto</h5>
                                    <p className="card-text" id="profissao">Desenvolvedor Front-End</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card" id="cartao2">
                                <img src={Mariana} className="card-img-top" alt="Foto da aluna do Instituto Proa chamada Mariana Alves Belo da Silva" title="Mariana Alves Belo da Silva" id="imagem2" />
                                <div className="card-body" id="texto">
                                    <h5 className="card-title" id="nome">Mariana Alves</h5>
                                    <p className="card-text" id="profissao">Desenvolvedora Front-End</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row justify-content-md-center">
                            <div className="col-md-4">
                                <div className="card" id="cartao2">
                                    <img src={Geovanna} className="card-img-top" alt="Foto da aluna do Instituto Proa chamada Geovanna Ramalho" title="Geovanna Ramalho" id="imagem2" />
                                    <div className="card-body" id="texto">
                                        <h5 className="card-title" id="nome">Geovanna Ramalho</h5>
                                        <p className="card-text" id="profissao">Desenvolvedora Front-End</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card" id="cartao2">
                                    <img src={Thiago} className="card-img-top" alt="Foto do aluno do Instituto Proa chamado Thiago Santos Guimarães" title="Thiago Santos Guimarães" id="imagem2" />
                                    <div className="card-body" id="texto">
                                        <h5 className="card-title" id="nome">Thiago Guimarães</h5>
                                        <p className="card-text" id="profissao">Desenvolvedor Full-Stack</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="card" id="cartao2">
                                    <img src={Eduarda} className="card-img-top" alt="Foto da aluna do Instituto Proa chamada Maria Eduarda Hais Eeswaramoorthy" title="Maria Eduarda Hais Eeswaramoorthy" id="imagem2" />
                                    <div className="card-body" id="texto">
                                        <h5 className="card-title" id="nome">M. Eduarda Hais</h5>
                                        <p className="card-title" id="profissao">Desenvolvedora Front-End</p>
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

