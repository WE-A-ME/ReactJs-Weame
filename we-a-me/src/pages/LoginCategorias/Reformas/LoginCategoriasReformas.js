import './LoginCategoriasReformas.css'
import Profissional from './img/imagemprofissional.jpg'

function Reformas() {
    return (

    <main>
        
        <div className="titulo">
            <h2>Reformas e Reparo</h2>
        </div>

        <div class="card mb-3" id="cartao3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={Profissional} class="img-fluid " alt="Imagem Profissional do Autônomo" title="Jorge dos Santos" id="imagem3"/>
            <div id="avaliacao">
              <ul class="nav col-12" id="estrelas">
                <li id="nota">4.5</li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star-half-stroke"></i></li>
              </ul>
              <p class="card-text" id="profissao3"><small class="text-muted">Avaliação Profissional </small></p>
           </div>
          </div>
          <div class="col-md-8">
            <div class="card-body" id="texto3">
              <h5 class="card-title" id="nome3">Jorge dos Santos</h5>
              <p class="card-text" id="profissao3"><small class="text-muted">Especialista em Pinturas e Consertos Residenciais. </small></p>
              <div class="icones">
                <ul class="nav col-12" id="informacoes2">
                    <li> <i class="fa-solid fa-location-dot"></i>  Osasco</li>
                    <li> <i class="fa-solid fa-hammer"></i>  17 Serviços</li>
                    <li> <i class="fa-solid fa-circle-check"></i>  Documentos Verificados</li>
                </ul>
              </div>
                  <div id="texto">
                    <p class="card-text">Sou prestativo, educado, competente e procuro atender ao máximo as expectativas dos meus clientes e das empresas. Trocas de luminárias, armários, instalações de antenas, pinturas em domicílios e comércios. </p>
                  </div>
            </div>
            <button id="botao">
              <a href="#">Visitar Perfil</a>
            </button>
          </div>
        </div>
      </div>
    </main>
        
    );
     }

export default Reformas;