import './SobreNos.css'
import Danielly from './fotos/Danielly.jpg'
import Hasan from './fotos/Hasan.jpg'
import Lennon from './fotos/Lennon.jpg'
import Mariana from './fotos/Mariana.jpg'
import Geovanna from './fotos/Geovanna.jpg'
import Thiago from './fotos/Thiago.png'
import Eduarda from './fotos/Eduarda.jpg'

function SobreNos() {
    return (

    <main className="main">
        
        <div className="titulo">
            <h2>Sobre Nós</h2>
        </div>
    
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="card"  id="cartao2">
                        <img src={Danielly} className="card-img-top" alt="Foto da aluna do Instituto Proa" title="Danielly Alves Silva" id="imagem2"/>
                        <div className="card-body" id="texto">
                            <h5 className="card-title" id="nome">Danielly Silva</h5>
                            <p className="card-text" id="profissao"><small className="text-muted">Desenvolvedora Front-End </small></p>
                            <h6 className="card-subtitle mb-2" id="proa">Como foi aprender no PROA?</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <ul className="nav col-6" id="redesociais">
                                <li><a href="https://www.linkedin.com/in/daniellyalvessilva/" target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>
                                <li><a href="https://github.com/daniellysilva" target="_blank"><i className="fa-brands fa-github-square" id="github"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
    
                <div className="col-md-3">
                    <div class="card"  id="cartao2">
                        <img src={Hasan} className="card-img-top" alt="Foto do aluno do Instituto Proa" title="Hasan Basam de Souza Dahbur" id="imagem2"/>
                        <div className="card-body" id="texto">
                            <h5 className="card-title" id="nome">Hasan Basam</h5>
                            <p className="card-text" id="profissao"><small className="text-muted">Desenvolvedor Full-Stack </small></p>
                            <h6 className="card-subtitle mb-2" id="proa">Como foi aprender no PROA?</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <ul className="nav col-6" id="redesociais">
                                <li><a href="https://www.linkedin.com/in/hasan-basam-26416b232/" target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>
                                <li><a href="https://github.com/HasanBasamm" target="_blank"><i className="fa-brands fa-github-square" id="github"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
    
                <div className="col-md-3">
                    <div className="card"  id="cartao2">
                        <img src={Lennon} className="card-img-top" alt="Foto do aluno do Instituto Proa" title="Lennon de Oliveira Manholeto" id="imagem2"/>
                        <div className="card-body" id="texto">
                            <h5 className="card-title" id="nome">Lennon Manholeto</h5>
                            <p className="card-text" id="profissao"><small className="text-muted">Desenvolvedor Front-End </small></p>
                            <h6 className="card-subtitle mb-2" id="proa">Como foi aprender no PROA?</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <ul className="nav col-6" id="redesociais">
                                <li><a href="https://www.linkedin.com/in/lennon-manholeto-72797a190/" target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>
                                <li><a href="https://github.com/Lennonmanholeto" target="_blank"><i className="fa-brands fa-github-square" id="github"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
    
                <div className="col-md-3">
                    <div className="card"  id="cartao2">
                        <img src={Mariana} className="card-img-top" alt="Foto da aluna do Instituto Proa" title="Mariana Alves Belo da Silva" id="imagem2"/>
                        <div className="card-body" id="texto">
                            <h5 className="card-title" id="nome">Mariana Alves</h5>
                            <p className="card-text" id="profissao"><small className="text-muted">Desenvolvedora de Banco de Dados </small></p>
                            <h6 className="card-subtitle mb-2" id="proa">Como foi aprender no PROA?</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <ul className="nav col-6" id="redesociais">
                                <li><a href="https://www.linkedin.com/in/mariana-alves-belo-da-silva-47a1391ab/" target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>
                                <li><a href="https://github.com/MarianaABSilva" target="_blank"><i className="fa-brands fa-github-square" id="github"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-md-4">
                        <div className="card"  id="cartao2">
                            <img src={Geovanna} className="card-img-top" alt="Foto da aluna do Instituto Proa" title="Geovanna Ramalho" id="imagem2"/>
                            <div className="card-body" id="texto">
                                <h5 className="card-title" id="nome">Geovanna Ramalho</h5>
                                <p className="card-text" id="profissao"><small className="text-muted">Desenvolvedora Front-End </small></p>
                                <h6 className="card-subtitle mb-2" id="proa">Como foi aprender no PROA?</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <ul className="nav col-6" id="redesociais">
                                    <li><a href="https://www.linkedin.com/in/geovanna-ramalho-a8a73394/" target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>
                                    <li><a href="https://github.com/Geo-Ramalho" target="_blank"><i className="fa-brands fa-github-square" id="github"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
        
                    <div className="col-md-4">
                        <div className="card"  id="cartao2">
                            <img src={Thiago} className="card-img-top" alt="Foto do aluno do Instituto Proa" title="Thiago Santos Guimarães" id="imagem2"/>
                            <div className="card-body" id="texto">
                                <h5 className="card-title" id="nome">Thiago Guimarães</h5>
                                <p className="card-text" id="profissao"><small className="text-muted">Desenvolvedor Full-Stack </small></p>
                                <h6 className="card-subtitle mb-2" id="proa">Como foi aprender no PROA?</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <ul className="nav col-6" id="redesociais">
                                    <li><a href="https://www.linkedin.com/in/thiago-santos-guimar%C3%A3es/" target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>
                                    <li><a href="https://github.com/tijigui" target="_blank"><i className="fa-brands fa-github-square" id="github"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
        
                    <div className="col-md-3">
                        <div className="card"  id="cartao2">
                            <img src={Eduarda} className="card-img-top" alt="Foto da aluna do Instituto Proa" title="Maria Eduarda Hais Eeswaramoorthy" id="imagem2"/>
                            <div className="card-body" id="texto">
                                <h5 className="card-title" id="nome">M. Eduarda Hais</h5>
                                <p className="card-text" id="profissao"><small className="text-muted">Desenvolvedora Front-End </small></p>
                                <h6 className="card-subtitle mb-2" id="proa">Como foi aprender no PROA?</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <ul className="nav col-6" id="redesociais">
                                    <li><a href="https://www.linkedin.com/in/maria-eduarda-hais-eeswaramoorthy-073171232/" target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>
                                    <li><a href="https://github.com/eduardahais" target="_blank"><i className="fa-brands fa-github-square" id="github"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>  
    );
  }
  
  export default SobreNos;