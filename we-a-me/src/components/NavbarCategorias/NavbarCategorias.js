import './NavbarCategorias.css';

function NavbarCategorias() {
    return (
        <div className="container-fluid" id="servicos">
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#" className="nav-link px-2" id="navbarletra">Reformas e Reparo</a></li>
                <li><a href="#" className="nav-link px-2" id="navbarletra">Beleza</a></li>
                <li><a href="#" className="nav-link px-2 " id="navbarletra">Auto</a></li>
                <li><a href="#" className="nav-link px-2 " id="navbarletra">Assistência Técnica</a></li>
                <li><a href="#" className="nav-link px-2 " id="navbarletra">Alimentos</a></li>
                <li><a href="#" className="nav-link px-2 " id="navbarletra">Programação</a></li>
                <li><a href="#" className="nav-link px-2 " id="navbarletra">Limpeza</a></li>
                <li><a href="#" className="nav-link px-2 " id="navbarletra">Design</a></li>
                <li><a href="#" className="nav-link px-2 " id="navbarletra">Comércio</a></li>
                <li><a href="#" className="nav-link px-2 " id="navbarletra">Moda</a></li>
            </ul>
            <div className="linhahorizontal"></div>
        </div>
    );
  }
  
  export default NavbarCategorias;