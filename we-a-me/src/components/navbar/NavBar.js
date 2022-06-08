import './Navbar.css';
import Logo from './logo.png'

function NavBar() {
    return (
        <div className="container" id="nav-container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            
                <a href="#" className="d-flex  col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <img className="logo" src={Logo} title="We-a-Me" alt="We-a-Me Logo" />
                </a>

                <form className="" id="pesquisa">
                  <input type="text"  placeholder="Busque por um serviço ou comércio" />
                  <button>
                    <i className="fa-solid fa-magnifying-glass" id="icone"></i>
                  </button>
                </form>
    
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0" id="navbar">
                  <li id="local"> <i id="iconelocal" className="fa-solid fa-location-dot"/></li>
                  <li><a id="letralocal" href="#" className="nav-link">Osasco, SP</a></li>
                  <li id="cliente"><a id="letracliente" href="#" className="nav-link">Olá, Jailson!</a></li>
                </ul>
        </header>
      </div>
    );
  }
  
  export default NavBar;