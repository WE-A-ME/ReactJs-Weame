import React from 'react';
import './Categorias.css';
import Profissional from './img/imagemprofissional.jpg';
import Profissional2 from './img/imagemprofissional2.jpg';
import Profissional3 from './img/imagemprofissional3.jpg';
import { NavBarIndex } from '../../Pages Componentes/NavBar Index/NavBarIndex';
import { NavbarCategorias } from '../../Pages Componentes/Navbar Categorias/NavbarCategorias';
import { Footer } from '../../Pages Componentes/Footer/footer';


export function Comercio() {
  return (

    <div>

      <NavBarIndex />
      <NavbarCategorias />

      <main>
        <div className="titulo">
          <h2>Comércio</h2>
        </div>
        <div className='container'>
          <div className='row align-items-center justify-content-md-center '>
            <div class="card mb-3" id="cartao3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={Profissional} class="img-fluid " alt="Imagem Profissional do Autônomo" title="Padaria da Ilha" id="imagem3" />
                </div>
                <div class="col-md-8">
                  <div class="card-body" id="texto1">
                    <h5 class="card-title" id="nome">Padaria da Ilha</h5>
                    <p class="card-text" id="profissaore">Padaria de Pães e Bolos</p>
                    <div class="icones">
                      <ul class="nav col-12" id="informacoes3">
                        <li> <i class="fa-solid fa-location-dot"></i>  Osasco</li>
                        <li> <i class="fa-solid fa-hammer"></i>  Comércio</li>
                        <li> <i class="fa-solid fa-circle-check"></i>  Documentos Verificados</li>
                      </ul>
                    </div>
                    <div id="texto1">
                      <p class="card-text">Fazemos Pães e Bolos quentinhos com a receita da Vovó, também aceitamos encomendas de comemoração. <p></p> <p>Avenida Santo Antônio, 1045 - Vila Osasco</p></p>
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
                  <img src={Profissional2} class="img-fluid " alt="Imagem Profissional do Autônomo" title="Bianca Store" id="imagem3" />
                </div>
                <div class="col-md-8">
                  <div class="card-body" id="texto1">
                    <h5 class="card-title" id="nome">Bianca Store</h5>
                    <p class="card-text" id="profissaore">Loja de Roupas</p>
                    <div class="icones">
                      <ul class="nav col-12" id="informacoes3">
                        <li> <i class="fa-solid fa-location-dot"></i>  Osasco</li>
                        <li> <i class="fa-solid fa-hammer"></i>   Comércio</li>
                        <li> <i class="fa-solid fa-circle-check"></i>  Documentos Verificados</li>
                      </ul>
                    </div>
                    <div id="texto1">
                      <p class="card-text">Temos roupas variadas e de diversos tamanhos, abrimos uma nova unidade, venha conferir! <p></p> Rua Domingues Pontes, 103 - Vila Bussocaba. </p>
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
                  <img src={Profissional3} class="img-fluid " alt="Imagem Profissional do Autônomo" title="Clothes & Accessories" id="imagem3" />
                </div>
                <div class="col-md-8">
                  <div class="card-body" id="texto1">
                    <h5 class="card-title" id="nome">Clothes & Accessories</h5>
                    <p class="card-text" id="profissaore">Loja de Roupas</p>
                    <div class="icones">
                      <ul class="nav col-12" id="informacoes3">
                        <li> <i class="fa-solid fa-location-dot"></i>   Osasco</li>
                        <li> <i class="fa-solid fa-hammer"></i>   Comércio </li>
                        <li> <i class="fa-solid fa-circle-check"></i>   Documentos Verificados</li>
                      </ul>
                    </div>
                    <div id="texto1">
                      <p class="card-text"> Somos focados em oferecer roupas femininas da melhor qualidade na região. Venha nos visitar! </p><p> Avenida Bussocada, 2205 - Vila Campesina </p>
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