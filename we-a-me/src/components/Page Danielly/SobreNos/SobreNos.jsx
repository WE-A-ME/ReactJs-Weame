import './SobreNos.css'
import Danielly from './fotos/Danielly.jpg'
import Hasan from './fotos/Hasan.jpg'
import Lennon from './fotos/Lennon.jpg'
import Mariana from './fotos/Mariana.jpg'
import Geovanna from './fotos/Geovanna.jpg'
import Thiago from './fotos/Thiago.png'
import Eduarda from './fotos/Eduarda.jpg'
import Imagem from './fotos/SobrenosImagem.png'
import { Footer } from '../../Pages Componentes/Footer/footer'
import { NavBarIndex } from '../../Pages Componentes/NavBar Index/NavBarIndex'


export function SobreNos() {
    return (

        <div>

            <NavBarIndex />

            <main className="main ">

                <div className="main--box--01">
                    <div className="main--box--01--text col-4">
                        <h1>Sobre Nós</h1>
                        <p className="col-11">Somos uma plataforma voltada para ajudar Autônomos e microempreendedores na visibilidade de seus trabalhos. Somos novos desenvolvedores entrando no mercado da tecnologia, trazemos visibilidade ao seu perfil através da nossa plataforma.

                            Somos uma equipe formada por 7 pessoas, Danielly Alves, Geovanna Ramalho, Hasan Basam, Maria Eduarda Hais, Mariana Alves, Lennon Manholetto, Thiago Guimarães. Começamos esse projeto no começo de 2022, atualmente só atentemos autônomos e comerciantes da grande São Paulo </p>

                    </div>
                    <div className="imagemsobrenos"><img src={Imagem} alt="" /></div>
                </div>

                <div className="main--box--04">

                    <div className="card text-center col-3">
                        <div className="card-body valores">
                            <h5 className="card-title">Nossa Missão</h5>
                            <p className="card-text">Visibilidade aos autônomos e acessibilidade  a Microeempreendedores.</p>
                        </div>
                    </div>
                    <div className="card text-center col-3">
                        <div className="card-body valores">
                            <h5 className="card-title">Nossa Visão</h5>
                            <p className="card-text">Conectar os autónomos e as microempresas ao mercado local e a comunidade. </p>
                        </div>
                    </div>
                    <div className="card text-center col-3">
                        <div className="card-body valores">
                            <h5 className="card-title">Nossos Valores</h5>
                            <p className="card-text">Confiança. <br /> Transparência. <br /> Segurança. </p>
                        </div>
                    </div>

                </div>

                <div className="titulosobrenos">
                    <h2>Nosso Time</h2>
                </div>

                <div className="container">
                    <div className="row row-cols-1 row-cols-md-4 g-4 align-items-center">
                        <div className="col-md-3">
                            <div className="card" id="cartao2">
                                <img src={Danielly} className="card-img-top" alt="Foto da aluna do Instituto Proa chamada Danielly Alves Silva" title="Danielly Alves Silva" id="imagem2" />
                                <div className="card-body" id="texto">
                                    <h5 className="card-title" id="nome">Danielly Silva</h5>
                                    <p className="card-title" id="profissao">Desenvolvedora Front-End</p>
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

