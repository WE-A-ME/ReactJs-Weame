import './NavBarIndex.css';
import React from 'react-router-dom';
import Categorias from '../../Paginas/Categorias/Categorias';
import Logo from './logo.png'

function NavBarIndex() {
    return (
        
        <div className="container-fluid" id="nav">
        <header className="d-flex align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            
                <a href="#" className="d-flex col-md-3 mb-2 mb-md-0 text-dark text-decoration-none flex-wrap">
                    <img className="logo" src={Logo} title="We-a-Me" alt="We-a-Me Logo" />
                </a>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0" id="navbar">
                    <li><a href="#" className="nav-link px-2" id="navbarletra">Categorias</a></li>
                    <li><a href="#" className="nav-link px-2" id="navbarletra">Para Profissionais</a></li>
                    <li><a href="#" className="nav-link px-2 " id="navbarletra">Suporte</a></li>
                    <li><a href="#" className="nav-link px-2 " id="navbarletra">Como Funciona</a></li>
                    <li><a href="#" className="nav-link px-2 " id="navbarletra">Sobre nós</a></li>
                </ul>
    
                <div className="col-md-3 text-end flex-wrap">
                    <a href="#" id="criarconta">Criar conta</a>
                    <button type="button" className="btn btn-link" id="entrar">Entrar</button>
                </div>
        </header>
      </div>
    );
  }
  
  export default NavBarIndex;