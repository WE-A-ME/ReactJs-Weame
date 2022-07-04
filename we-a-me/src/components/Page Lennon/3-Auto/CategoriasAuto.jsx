import React from 'react';
import './Categorias.css';
import Profissional from './img/imagemprofissional.jpg';
import Profissional2 from './img/imagemprofissional2.jpg';
import Profissional3 from './img/imagemprofissional3.jpg';
import { NavBarIndex } from '../../Pages Componentes/NavBar Index/NavBarIndex';
import { NavbarCategorias } from '../../Pages Componentes/Navbar Categorias/NavbarCategorias';
import { Footer } from '../../Pages Componentes/Footer/footer';


export function Auto() {
  return (

    <div>

      <NavBarIndex />
      <NavbarCategorias />

      <main>
        <div className="titulo">
          <h2>Auto</h2>
        </div>
        <div className='container'>
          <div className='row align-items-center justify-content-md-center '>
            <div class="card mb-3" id="cartao3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={Profissional} class="img-fluid " alt="Imagem Profissional do Autônomo" title="Antônio Pedroza" id="imagem3" />
                </div>
                <div class="col-md-8">
                  <div class="card-body" id="texto1">
                    <h5 class="card-title" id="nome">Antônio Pedroza</h5>
                    <p class="card-text" id="profissaore">Especialista em Caminhões</p>
                    <div class="icones">
                      <ul class="nav col-12" id="informacoes3">
                        <li> <i class="fa-solid fa-location-dot"></i>  Osasco</li>
                        <li> <i class="fa-solid fa-hammer"></i>  39 Serviços</li>
                        <li> <i class="fa-solid fa-phone"></i>   (11) 966664444</li>
                      </ul>
                    </div>
                    <div id="texto1">
                      <p class="card-text">Gosto muito da Estrada e com ela, os caminhões. Com toda a minha experiência de mais de 40 anos de estrada, ofereço serviços e ajuda a quem precisar.</p>
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
                  <img src={Profissional2} class="img-fluid " alt="Imagem Profissional do Autônomo" title="Camila Farreiro" id="imagem3" />
                </div>
                <div class="col-md-8">
                  <div class="card-body" id="texto1">
                    <h5 class="card-title" id="nome">Camila Farreiro</h5>
                    <p class="card-text" id="profissaore">Motorista de Carga</p>
                    <div class="icones">
                      <ul class="nav col-12" id="informacoes3">
                        <li> <i class="fa-solid fa-location-dot"></i>  Osasco</li>
                        <li> <i class="fa-solid fa-hammer"></i>  73 Serviços</li>
                        <li> <i class="fa-solid fa-phone"></i>   (11) 966664444</li>
                      </ul>
                    </div>
                    <div id="texto1">
                      <p class="card-text">Sou apaixonada pela estrada, levo carga pelo Brasil inteiro. Tenho caminhão próprio, me contate e planejamos o frete.</p>
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
                  <img src={Profissional3} class="img-fluid " alt="Imagem Profissional do Autônomo" title="Joaquim Pereira" id="imagem3" />
                </div>
                <div class="col-md-8">
                  <div class="card-body" id="texto1">
                    <h5 class="card-title" id="nome">Joaquim Pereira</h5>
                    <p class="card-text" id="profissaore">Mecânico de Carros</p>
                    <div class="icones">
                      <ul class="nav col-12" id="informacoes3">
                        <li> <i class="fa-solid fa-location-dot"></i>   Osasco</li>
                        <li> <i class="fa-solid fa-hammer"></i>   22 Serviços</li>
                        <li> <i class="fa-solid fa-phone"></i>   (11) 966664444</li>
                      </ul>
                    </div>
                    <div id="texto1">
                      <p class="card-text"> Sou Mecânico há 32 anos, tenho oficina e também presto serviços rápidos em estradas e postos. </p>
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