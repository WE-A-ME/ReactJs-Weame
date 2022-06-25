import React from 'react';
import './Categorias.css';
import Profissional from './img/imagemprofissional.jpg';
import Profissional2 from './img/imagemprofissional2.jpg';
import Profissional3 from './img/imagemprofissional3.jpg';
import { NavBarIndex } from '../../Pages Componentes/NavBar Index/NavBarIndex';
import { NavbarCategorias } from '../../Pages Componentes/Navbar Categorias/NavbarCategorias';
import { Footer } from '../../Pages Componentes/Footer/footer';


export function Moda() {
  return (

    <div>

      <NavBarIndex />
      <NavbarCategorias />

      <main>
        <div className="titulo">
          <h2>Moda</h2>
        </div>
        <div className='container'>
          <div className='row align-items-center justify-content-md-center '>
            <div class="card mb-3" id="cartao3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={Profissional} class="img-fluid " alt="Imagem Profissional do Autônomo" title="Maria Elisa" id="imagem3" />
                </div>
                <div class="col-md-8">
                  <div class="card-body" id="texto1">
                    <h5 class="card-title" id="nome">Maria Elisa</h5>
                    <p class="card-text" id="profissaore">Costura</p>
                    <div class="icones">
                      <ul class="nav col-12" id="informacoes3">
                        <li> <i class="fa-solid fa-location-dot"></i>  Osasco</li>
                        <li> <i class="fa-solid fa-hammer"></i>  15 Serviços</li>
                        <li> <i class="fa-solid fa-circle-check"></i>  Documentos Verificados</li>
                      </ul>
                    </div>
                    <div id="texto1">
                      <p class="card-text">Olá, sou Maria Elisa, tenho 56 anos e faço costuras, remendos, bijuterias, lembrancinhas a mais de 40 anos. Sempre atendia para as minhas amigas e vizinhos do meu bairro, mas agora estou buscando mostrar mais o meu trabalho. Se esta buscando alguma lembrancinha, concerto de roupa, ou qualquer coisa relacionado a costura, eu posso te ajudar. </p>
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
                  <img src={Profissional2} class="img-fluid " alt="Imagem Profissional do Autônomo" title="Joice de Oliveira" id="imagem3" />
                </div>
                <div class="col-md-8">
                  <div class="card-body" id="texto1">
                    <h5 class="card-title" id="nome">Joice de Oliveira</h5>
                    <p class="card-text" id="profissaore">Fotografia</p>
                    <div class="icones">
                      <ul class="nav col-12" id="informacoes3">
                        <li> <i class="fa-solid fa-location-dot"></i>  Osasco</li>
                        <li> <i class="fa-solid fa-hammer"></i>  22 Serviços</li>
                        <li> <i class="fa-solid fa-circle-check"></i>  Documentos Verificados</li>
                      </ul>
                    </div>
                    <div id="texto1">
                      <p class="card-text">Me chamo Joice, sou estudante de Fotografia na UNIP. Trabalho com fotos de pessoas e eventos, como casamentos, formaturas e festas, de publicidade para campanhas de Marketing ou de Moda, fotografias artísticas, entre outras categorias. Esta buscando alguém para alguns desses trabalhos? Venha fazer um orçamento!.</p>
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
                  <img src={Profissional3} class="img-fluid " alt="Imagem Profissional do Autônomo" title="Miguel Lima" id="imagem3" />
                </div>
                <div class="col-md-8">
                  <div class="card-body" id="texto1">
                    <h5 class="card-title" id="nome">Miguel Lima</h5>
                    <p class="card-text" id="profissaore">Estilista</p>
                    <div class="icones">
                      <ul class="nav col-12" id="informacoes3">
                        <li> <i class="fa-solid fa-location-dot"></i>   Osasco</li>
                        <li> <i class="fa-solid fa-hammer"></i>   25 Serviços</li>
                        <li> <i class="fa-solid fa-circle-check"></i>   Documentos Verificados</li>
                      </ul>
                    </div>
                    <div id="texto1">
                      <p class="card-text">Sou Miguel Lima, tenho 25 anos sou formado em designer de moda com especialização em estilismo. Desenvolvo estilos de calçados, roupas e acessórios, elaboro croquis e desenho coleções a gosto do cliente, desenvolvo looks de padrinhos de um casamento entre outros trabalhos. Venha conhecer o meu trabalho!</p>
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