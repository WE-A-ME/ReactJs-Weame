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

export function PaginaCliente() {
    return (
        
        <main class="main ">

        <div class="titulocliente">
            <h2>Ultimos serviços</h2>
        </div>

        <div class="container-fluid">
            <div class="row justify-content-md-center align-items-center">
                
                <div class="col-md-2">
                    <div class="card" id="cartaoprof">
                      <a href=""><img src={Profissinal1} class="card-img-top" alt="Foto do Jorge dos Santos que trabalha na área de Reformas e Reparo" title="Jorge dos Santos" id="imagemprof" /></a> 
                      <div class="card-body" id="texto">
                        <h5 class="card-title" id="nome">Jorge dos Santos</h5>
                        <p class="card-text" id="profissao">Reformas e Reparo</p>
                        <div class="estrelasprof">
                            <ul class="nav col-12 card-title">
                                <li><i class="fa-solid fa-star"></i></li>
                                <li><i class="fa-solid fa-star"></i></li>
                                <li><i class="fa-solid fa-star"></i></li>
                                <li><i class="fa-solid fa-star"></i></li>
                                <li><i class="fa-solid fa-star"></i></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="card" id="cartaoprof">
                      <a href=""><img src={Profissinal2} class="card-img-top" alt="Foto da Denise Ferreira que trabalha na área de Programação" title="Denise Ferreira" id="imagemprof" /></a> 
                        <div class="card-body" id="texto">
                            <h5 class="card-title" id="nome">Denise Ferreira</h5>
                            <p class="card-text" id="profissao">Programação</p>
                            <div class="estrelasprof">
                                <ul class="nav col-12 card-title">
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="card" id="cartaoprof">
                       <a href=""><img src={Profissinal3} class="card-img-top" alt="Foto da Graça de Jesus que trabalha na área de Limpeza" title="Graça de Jesus" id="imagemprof" /></a> 
                        <div class="card-body" id="texto">
                            <h5 class="card-title" id="nome">Graça de Jesus</h5>
                            <p class="card-text" id="profissao">Limpeza</p>
                            <div class="estrelasprof">
                                <ul class="nav col-12 card-title">
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="card" id="cartaoprof">
                        <a href=""><img src={Profissinal4} class="card-img-top" alt="Foto da Jéssica Farias que trabalha na área de Manutenção de T.I" title="Jéssica Farias" id="imagemprof" /></a> 
                        <div class="card-body" id="texto">
                            <h5 class="card-title" id="nome">Jéssica Farias</h5>
                            <p class="card-text" id="profissao">Manutenção de T.I</p>
                            <div class="estrelasprof">
                                <ul class="nav col-12 card-title">
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="card" id="cartaoprof">
                        <a href=""><img src={Profissinal5} class="card-img-top" alt="Foto da Danielly Silva que trabalha na área de Doces e Confeitaria" title="Danielly Silva" id="imagemprof" /></a> 
                        <div class="card-body" id="texto">
                            <h5 class="card-title" id="nome">Danielly Silva</h5>
                            <p class="card-text" id="profissao">Doces e Confeitaria</p>
                            <div class="estrelasprof">
                                <ul class="nav col-12 card-title">
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-md-1">
                    <div class="card" id="cartaoprof">
                        <div class="btn-group botao" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn" id='botaoprof'><i class="fa-solid fa-angle-right"></i></button>
                          </div>
                    </div>
            </div>
        </div>

        
        <div class="titulocliente">
            <h2>Os serviços mais bem avaliados da sua região</h2>
        </div>

        <div class="container-fluid">
            <div class="row justify-content-md-center align-items-center">
                
                <div class="col-md-2">
                    <div class="card" id="cartaoprof">
                      <a href=""><img src={Profissinal6} class="card-img-top" alt="Foto do Pedro Almeida que trabalha na área de Design de Sites" title="Pedro Almeida" id="imagemprof" /></a> 
                      <div class="card-body" id="texto">
                        <h5 class="card-title" id="nome">Pedro Almeida</h5>
                        <p class="card-text" id="profissao">Design de Sites</p>
                        <div class="estrelasprof">
                            <ul class="nav col-12 card-title">
                                <li><i class="fa-solid fa-star"></i></li>
                                <li><i class="fa-solid fa-star"></i></li>
                                <li><i class="fa-solid fa-star"></i></li>
                                <li><i class="fa-solid fa-star"></i></li>
                                <li><i class="fa-solid fa-star"></i></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="card" id="cartaoprof">
                      <a href=""><img src={Profissinal7} class="card-img-top" alt="Foto da Joice de Oliveira que trabalha na área de Fotografia" title="Joice de Oliveira" id="imagemprof" /></a> 
                        <div class="card-body" id="texto">
                            <h5 class="card-title" id="nome">Joice de Oliveira</h5>
                            <p class="card-text" id="profissao">Fotografia</p>
                            <div class="estrelasprof">
                                <ul class="nav col-12 card-title">
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="card" id="cartaoprof">
                       <a href=""><img src={Profissinal8} class="card-img-top" alt="Foto da Maria Elisa que trabalha na área de Costura" title="Maria Elisa" id="imagemprof" /></a> 
                        <div class="card-body" id="texto">
                            <h5 class="card-title" id="nome">Maria Elisa</h5>
                            <p class="card-text" id="profissao">Costura</p>
                            <div class="estrelasprof">
                                <ul class="nav col-12 card-title">
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="card" id="cartaoprof">
                        <a href=""><img src={Profissinal4} class="card-img-top" alt="Foto da Jéssica Farias que trabalha na área de Manutenção de T.I" title="Jéssica Farias" id="imagemprof" /></a> 
                        <div class="card-body" id="texto">
                            <h5 class="card-title" id="nome">Jéssica Farias</h5>
                            <p class="card-text" id="profissao">Manutenção de T.I</p>
                            <div class="estrelasprof">
                                <ul class="nav col-12 card-title">
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="card" id="cartaoprof">
                        <a href=""><img src={Profissinal9} class="card-img-top" alt="Foto da Beatriz Santos que trabalha na área de Maquiagem" title="Beatriz Santos" id="imagemprof" /></a> 
                        <div class="card-body" id="texto">
                            <h5 class="card-title" id="nome">Beatriz Santos</h5>
                            <p class="card-text" id="profissao">Maquiagem</p>
                            <div class="estrelasprof">
                                <ul class="nav col-12 card-title">
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-md-1">
                    <div class="card" id="cartaoprof">
                        <div class="btn-group botao" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn" id="botaoprof"><i class="fa-solid fa-angle-right"></i></button>
                          </div>
                    </div>
            </div>
        </div>
    </div>
        <div class="titulocliente">
            <h2>Comércios mais bem avaliados da sua região</h2>
        </div>

        <div class="container-fluid">
            <div class="row justify-content-md-center align-items-center">
                
                <div class="col-md-2">
                    <div class="card" id="cartaoprof">
                      <a href=""><img src={Comercio1} class="card-img-top" alt="Logo do comércio da Padaria Pão bom" title="Padaria Pão bom" id="imagemprof" /></a> 
                      <div class="card-body" id="texto">
                        <h5 class="card-title" id="nome">Padaria Pão Bom</h5>
                        <p class="card-text" id="profissao">Comércio</p>
                        <div class="estrelasprof">
                            <ul class="nav col-12 card-title">
                                <li><i class="fa-solid fa-star"></i></li>
                                <li><i class="fa-solid fa-star"></i></li>
                                <li><i class="fa-solid fa-star"></i></li>
                                <li><i class="fa-solid fa-star"></i></li>
                                <li><i class="fa-solid fa-star"></i></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="card" id="cartaoprof">
                      <a href=""><img src={Comercio2} class="card-img-top" alt="Logo do comércio Pastelaria" title="Pastelaria" id="imagemprof" /></a> 
                        <div class="card-body" id="texto">
                            <h5 class="card-title" id="nome">Pastelaria</h5>
                            <p class="card-text" id="profissao">Comércio</p>
                            <div class="estrelasprof">
                                <ul class="nav col-12 card-title">
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="card" id="cartaoprof">
                       <a href=""><img src={Comercio3} class="card-img-top" alt="Logo do comércio da Padaria Vitória" title="Padaria Vitória" id="imagemprof" /></a> 
                        <div class="card-body" id="texto">
                            <h5 class="card-title" id="nome">Padaria Vitória</h5>
                            <p class="card-text" id="profissao">Comércio</p>
                            <div class="estrelasprof">
                                <ul class="nav col-12 card-title">
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="card" id="cartaoprof">
                        <a href=""><img src={Comercio4} class="card-img-top" alt="Logo do comércio da Bomboniere" title="Bomboniere" id="imagemprof" /></a> 
                        <div class="card-body" id="texto">
                            <h5 class="card-title" id="nome">Bomboniere</h5>
                            <p class="card-text" id="profissao">Comércio</p>
                            <div class="estrelasprof">
                                <ul class="nav col-12 card-title">
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="card" id="cartaoprof">
                        <a href=""><img src={Comercio5} class="card-img-top" alt="Logo do comércio da Esfilharia" title="Esfilharia" id="imagemprof" /></a> 
                        <div class="card-body" id="texto">
                            <h5 class="card-title" id="nome">Esfilharia</h5>
                            <p class="card-text" id="profissao">Comércio</p>
                            <div class="estrelasprof">
                                <ul class="nav col-12 card-title">
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-md-1">
                    <div class="card" id="cartaoprof">
                        <div class="btn-group botao" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn" id="botaoprof"><i class="fa-solid fa-angle-right"></i></button>
                          </div>
                    </div>
                </div>
        </div>
        </div>

        <div class="titulocliente">
            <h2>Categorias mais utilizadas por você:</h2>
        </div>

        <div class="container-fluid">
            <div class="row justify-content-md-center align-items-center">
                
                <div class="col-md-3">
                    <div class="card" id="cartaocat">
                      <a href=""><img src={Limpeza} class="card-img-top" alt="Um gif de uma mulher com uma vassoura e um tira pó na mão" id="imagemcat" /></a> 
                      <div class="card-body" id="testocat">
                        <h5 class="card-title" id="nome">Limpeza</h5>
                    </div>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="card" id="cartaocat">
                      <a href=""><img src={Assistencia} class="card-img-top" alt="Um gif de uma chave inglesa se mexendo"  id="imagemcat" /></a> 
                        <div class="card-body" id="testocat">
                            <h5 class="card-title" id="nome">Assistência Técnica</h5>
                        </div>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="card" id="cartaocat">
                       <a href=""><img src={Programacao} class="card-img-top" alt="Um gi de uma tela de um computador de mexendo e brilhando" id="imagemcat" /></a> 
                        <div class="card-body" id="testocat">
                            <h5 class="card-title" id="nome">Programação</h5>
                        </div>
                    </div>
                </div>

                <div class="col-md-1">
                    <div class="card" id="cartaoprof">
                        <div class="btn-group botao" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn" id="botaocat"><i class="fa-solid fa-angle-right"></i></button>
                          </div>
                    </div>
                </div>
                </div>
        </div>

        <div class="titulocliente">
            <h2>Categorias mais recomendas para você</h2>
        </div>

        <div class="container-fluid">
            <div class="row justify-content-md-center align-items-center">
                
                <div class="col-md-3">
                    <div class="card" id="cartaocat">
                      <a href=""><img src={Limpeza} class="card-img-top" alt="Um gif de uma mulher com uma vassoura e um tira pó na mão se mexendo" id="imagemcat" /></a> 
                      <div class="card-body" id="testocat">
                        <h5 class="card-title" id="nome">Limpeza</h5>
                    </div>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="card" id="cartaocat">
                      <a href=""><img src={Alimentos} class="card-img-top" alt="Um gif de uma prateleira cheio de alimentos se mexendo" id="imagemcat" /></a> 
                        <div class="card-body" id="testocat">
                            <h5 class="card-title" id="nome">Alimentos</h5>
                        </div>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="card" id="cartaocat">
                       <a href=""><img src={Comercio} class="card-img-top" alt="Um gif de um carrinho de supermercado correndo" id="imagemcat" /></a> 
                        <div class="card-body" id="testocat">
                            <h5 class="card-title" id="nome">Comércio</h5>
                        </div>
                    </div>
                </div>

                <div class="col-md-1">
                    <div class="card" id="cartaoprof">
                        <div class="btn-group botao" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn" id="botaocat"><i class="fa-solid fa-angle-right"></i></button>
                          </div>
                    </div>
                </div>
        </div>
        </div>
        </div>
        
    </main>

    );
  }