import React from 'react';
import './LoginCategoriasReformas.css';
import Profissional from './img/imagemprofissional.jpg';
import Profissional2 from './img/imagemprofissional2.jpg';
import Profissional3 from './img/imagemprofissional3.jpg';
import { NavBarIndex } from '../../../Pages Componentes/NavBar Index/NavBarIndex';
import { NavbarCategorias } from '../../../Pages Componentes/Navbar Categorias/NavbarCategorias';
import { Footer } from '../../../Pages Componentes/Footer/footer';


export function Reformas() {
  return (

    <div>

      <NavBarIndex />
      <NavbarCategorias />

      <main>
        <div className="titulo">
          <h2>Reformas e Reparo</h2>
        </div>
        <div class="card mb-3" id="cartao3">
          <div class="row g-0">
            <div class="col-md-4">
              <img src={Profissional} class="img-fluid " alt="Imagem Profissional do Autônomo" title="Jorge dos Santos" id="imagem3" />
              <div id="avaliacao1">
                <ul class="nav col-12" id="estrelas1">
                  <li id="nota">4.5</li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star-half-stroke"></i></li>
                </ul>
                <p class="card-text" id="profissao9"><small class="text-muted">Avaliação Profissional </small></p>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card-body" id="texto1">
                <h5 class="card-title" id="nome">Jorge dos Santos</h5>
                <p class="card-text" id="profissao">Especialista em Pinturas e Consertos Residenciais.</p>
                <div class="icones">
                  <ul class="nav col-12" id="informacoes3">
                    <li> <i class="fa-solid fa-location-dot"></i>  Osasco</li>
                    <li> <i class="fa-solid fa-hammer"></i>  17 Serviços</li>
                    <li> <i class="fa-solid fa-circle-check"></i>  Documentos Verificados</li>
                  </ul>
                </div>
                <div id="texto1">
                  <p class="card-text">Sou prestativo, educado, competente e procuro atender ao máximo as expectativas dos meus clientes e das empresas. Trocas de luminárias, armários, instalações de antenas, pinturas em domicílios e comércios. </p>
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
              <img src={Profissional2} class="img-fluid " alt="Imagem Profissional do Autônomo" title="Bárbara Martins" id="imagem3" />
              <div id="avaliacao1">
                <ul class="nav col-12" id="estrelas1">
                  <li id="nota">4.0</li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                </ul>
                <p class="card-text" id="profissao9"><small class="text-muted">Avaliação Profissional </small></p>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card-body" id="texto1">
                <h5 class="card-title" id="nome">Bárbara Martins</h5>
                <p class="card-text" id="profissao">Auxiliar de Manutenção Mecânica.</p>
                <div class="icones">
                  <ul class="nav col-12" id="informacoes3">
                    <li> <i class="fa-solid fa-location-dot"></i>  Osasco</li>
                    <li> <i class="fa-solid fa-hammer"></i>  7 Serviços</li>
                    <li> <i class="fa-solid fa-circle-check"></i>  Documentos Verificados</li>
                  </ul>
                </div>
                <div id="texto1">
                  <p class="card-text">Olá eu sou a Bárbara, acabei de concluir o curso de Auxiliar Mecânico de Manutenção no SENAI. Eu tenho boas referências dos meu professores e muita motivação em ajudar o meu cliente. Tenho preferência em atender na cidade de Osasco.</p>
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
              <img src={Profissional3} class="img-fluid " alt="Imagem Profissional do Autônomo" title="Pedro Lacerda Junior" id="imagem3" />
              <div id="avaliacao1">
                <ul class="nav col-12" id="estrelas1">
                  <li id="nota">5.0</li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                </ul>
                <p class="card-text" id="profissao9"><small class="text-muted">Avaliação Profissional </small></p>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card-body" id="texto1">
                <h5 class="card-title" id="nome">Pedro Lacerda Junior</h5>
                <p class="card-text" id="profissao">Empreiteiro</p>
                <div class="icones">
                  <ul class="nav col-12" id="informacoes3">
                    <li> <i class="fa-solid fa-location-dot"></i>   Osasco</li>
                    <li> <i class="fa-solid fa-hammer"></i>   25 Serviços</li>
                    <li> <i class="fa-solid fa-circle-check"></i>   Documentos Verificados</li>
                  </ul>
                </div>
                <div id="texto1">
                  <p class="card-text">Tenho bastante disposição e habilidade. Atualmente possuo mais de 10 anos de experiência e boas referências, o que comprova a qualidade do meu trabalho. Possuo curso técnico, garantindo um serviço de qualidade por um ótimo preço!</p>
                </div>
              </div>
              <button id="botao">
                <a href="#">Visitar Perfil</a>
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />

    </div>

  );
}