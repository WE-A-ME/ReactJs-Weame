import './navbar.css';
import Logo from './logo.png'

function NavBar() {
  return (
    <div className="container-fluid" id="nav">
      <header className="d-flex flex-wrap align-items-center justify-content-center minha-class py-3 mb-4">

        <a href="#" className="d-flex  col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          <img className="header--logo" src={Logo} title="We-a-Me" alt="We-a-Me Logo" />
        </a>

        <form className="" id="pesquisa">
          <input type="text" placeholder="Busque por um serviço ou comércio" />
          <button>
            <i className="fa-solid fa-magnifying-glass" id="icone"></i>
          </button>
        </form>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0" id="navbar">
          <li id="local"> <i id="iconelocal" className="fa-solid fa-location-dot" /></li>
          <a id="letra-local" href="#" className="nav-link">Osasco, SP</a>
          <div class="dropdown">
            <p class="dropdown-toggle navlink"  type="button" id="letra-cliente" data-bs-toggle="dropdown" aria-expanded="false">
              Olá, Jailson
            </p>
            <ul class="dropdown-menu" aria-labelledby="dropdown">
              <li><a class="dropdown-item" href="#">Dropdown item</a></li>
              <li><a class="dropdown-item" href="#">Dropdown item</a></li>
              <li><a class="dropdown-item" href="#">Dropdown item</a></li>
            </ul>
          </div>
        </ul>

      </header>
    </div>
  );
}

export default NavBar;