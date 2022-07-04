import React from 'react';
import './Categorias.css';
import Profissional from './img/imagemprofissional.jpg';
import Profissional2 from './img/imagemprofissional2.jpg';
import Profissional3 from './img/imagemprofissional3.jpg';
import { NavBarIndex } from '../../Pages Componentes/NavBar Index/NavBarIndex';
import { NavbarCategorias } from '../../Pages Componentes/Navbar Categorias/NavbarCategorias';
import { Footer } from '../../Pages Componentes/Footer/footer';


export function Design() {
  return (

    <div>

      <NavBarIndex />
      <NavbarCategorias />

      <main>
        <div className="titulo">
          <h2>Design</h2>
        </div>
        <div className='container'>
          <div className='row align-items-center justify-content-md-center '>
            <div class="card mb-3" id="cartao3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={Profissional} class="img-fluid " alt="Imagem Profissional do Autônomo" title="Leonardo Dioniz" id="imagem3" />
                </div>
                <div class="col-md-8">
                  <div class="card-body" id="texto1">
                    <h5 class="card-title" id="nome">Leonardo Dioniz</h5>
                    <p class="card-text" id="profissaore">Design de Produtos</p>
                    <div class="icones">
                      <ul class="nav col-12" id="informacoes3">
                        <li> <i class="fa-solid fa-location-dot"></i>  Osasco</li>
                        <li> <i class="fa-solid fa-hammer"></i>  42 Serviços</li>
                        <li> <i class="fa-solid fa-phone"></i>   (11) 966664444</li>
                      </ul>
                    </div>
                    <div id="texto1">
                      <p class="card-text">Sou formado em Design, com especialização em desenhor de produtos. </p>
                    </div>
                  </div>
                  <button id="botao">
                    <a href="#">Visitar Perfil</a>
                  </button>
                </div>
              </div>
            </div>
            <div class="card mb-3" id="cartao3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={Profissional2} class="img-fluid " alt="Imagem Profissional do Autônomo" title="Bianca Parolini" id="imagem3" />
                </div>
                <div class="col-md-8">
                  <div class="card-body" id="texto1">
                    <h5 class="card-title" id="nome">Bianca Parolini</h5>
                    <p class="card-text" id="profissaore">Design de Interiores</p>
                    <div class="icones">
                      <ul class="nav col-12" id="informacoes3">
                        <li> <i class="fa-solid fa-location-dot"></i>  Osasco</li>
                        <li> <i class="fa-solid fa-hammer"></i>  51 Serviços </li>
                        <li> <i class="fa-solid fa-phone"></i>   (11) 966664444</li>
                      </ul>
                    </div>
                    <div id="texto1">
                      <p class="card-text">Sou formada em Arquitetura e Urbanismo, fiz um curso de Design de Interiores no Senac e atuo no mercado há 10 anos. Meu escritório se localiza: <p></p> Rua Maria de Campos, 320 - Centro. </p>
                    </div>
                  </div>
                  <button id="botao">
                    <a href="#">Visitar Perfil</a>
                  </button>
                </div>
              </div>
            </div>
            <div class="card mb-3" id="cartao3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={Profissional3} class="img-fluid " alt="Imagem Profissional do Autônomo" title="Hana Akemi" id="imagem3" />
                </div>
                <div class="col-md-8">
                  <div class="card-body" id="texto1">
                    <h5 class="card-title" id="nome">Hana Akemi</h5>
                    <p class="card-text" id="profissaore">Designer Gráfico</p>
                    <div class="icones">
                      <ul class="nav col-12" id="informacoes3">
                        <li> <i class="fa-solid fa-location-dot"></i>   Osasco</li>
                        <li> <i class="fa-solid fa-hammer"></i>   63 Serviços</li>
                        <li> <i class="fa-solid fa-phone"></i>   (11) 966664444</li>
                      </ul>
                    </div>
                    <div id="texto1">
                      <p class="card-text"> Trabalhei por 5 anos no Japão e retorno ao Brasil com meus trabalhos em Design Gráfico. Me contate :D </p>
                    </div>
                  </div>
                  <button id="botao">
                    <a href="#">Visitar Perfil</a>
                  </button>
                </div>
              </div>
            </div>
            <div class="btn-toolbar botoesfundo align-items-center justify-content-md-center" role="toolbar" aria-label="Toolbar with button groups">
              <div class="btn-group me-2" role="group" aria-label="First group">
                <button type="button" class="btn btn-primary">1</button>
                <button type="button" class="btn btn-primary">2</button>
                <button type="button" class="btn btn-primary">3</button>
                <button type="button" class="btn btn-primary">4</button>
              </div>
            </div>
          </div>
        </div>


      </main>

      <Footer />

    </div>

  );
}