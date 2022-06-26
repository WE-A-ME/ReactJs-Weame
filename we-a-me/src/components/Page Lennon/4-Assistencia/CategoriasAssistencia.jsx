import React from 'react';
import './Categorias.css';
import Profissional from './img/imagemprofissional.jpg';
import Profissional2 from './img/imagemprofissional2.jpg';
import Profissional3 from './img/imagemprofissional3.jpg';
import { NavBarIndex } from '../../Pages Componentes/NavBar Index/NavBarIndex';
import { NavbarCategorias } from '../../Pages Componentes/Navbar Categorias/NavbarCategorias';
import { Footer } from '../../Pages Componentes/Footer/footer';


export function Assistencia() {
  return (

    <div>

      <NavBarIndex />
      <NavbarCategorias />

      <main>
        <div className="titulo">
          <h2>Assistência Técnica</h2>
        </div>
        <div className='container'>
          <div className='row align-items-center justify-content-md-center '>
            <div class="card mb-3" id="cartao3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={Profissional} class="img-fluid " alt="Imagem Profissional do Autônomo" title="Gabriel Marcondes" id="imagem3" />
                </div>
                <div class="col-md-8">
                  <div class="card-body" id="texto1">
                    <h5 class="card-title" id="nome">Gabriel Marcondes</h5>
                    <p class="card-text" id="profissaore">Especialista em Televisores e Projetores.</p>
                    <div class="icones">
                      <ul class="nav col-12" id="informacoes3">
                        <li> <i class="fa-solid fa-location-dot"></i>  Osasco</li>
                        <li> <i class="fa-solid fa-hammer"></i>  62 Serviços</li>
                        <li> <i class="fa-solid fa-circle-check"></i>  Documentos Verificados</li>
                      </ul>
                    </div>
                    <div id="texto1">
                      <p class="card-text">Sou focado em assistência de burn-in de televisores Led's, NanoCell e Oled's. Projetores com baixa luz e alcance.</p>
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
                  <img src={Profissional2} class="img-fluid " alt="Imagem Profissional do Autônomo" title="Assistência Técnica OZTech" id="imagem3" />
                </div>
                <div class="col-md-8">
                  <div class="card-body" id="texto1">
                    <h5 class="card-title" id="nome">Assistência Técnica OZTech</h5>
                    <p class="card-text" id="profissaore">Loja</p>
                    <div class="icones">
                      <ul class="nav col-12" id="informacoes3">
                        <li> <i class="fa-solid fa-location-dot"></i>  Osasco</li>
                        <li> <i class="fa-solid fa-hammer"></i>   Comércio</li>
                        <li> <i class="fa-solid fa-circle-check"></i>  Documentos Verificados</li>
                      </ul>
                    </div>
                    <div id="texto1">
                      <p class="card-text">Nossos assistentes proporcionam ao cliente resoluções objetivas e rápidas. Localizada de fácil acesso ao Centro de Osasco. <p></p> Rua Antônio Agu, 78 - Centro. </p>
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
                  <img src={Profissional3} class="img-fluid " alt="Imagem Profissional do Autônomo" title="Pedro Callaberi" id="imagem3" />
                </div>
                <div class="col-md-8">
                  <div class="card-body" id="texto1">
                    <h5 class="card-title" id="nome">Pedro Callaberi</h5>
                    <p class="card-text" id="profissaore">Hardware em Geral</p>
                    <div class="icones">
                      <ul class="nav col-12" id="informacoes3">
                        <li> <i class="fa-solid fa-location-dot"></i>   Osasco</li>
                        <li> <i class="fa-solid fa-hammer"></i>   44 Serviços</li>
                        <li> <i class="fa-solid fa-circle-check"></i>   Documentos Verificados</li>
                      </ul>
                    </div>
                    <div id="texto1">
                      <p class="card-text"> Há 10 anos montando computadores e celulares com a melhor configuração e prestando assistência com formatação e reboot de BIOS. </p>
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