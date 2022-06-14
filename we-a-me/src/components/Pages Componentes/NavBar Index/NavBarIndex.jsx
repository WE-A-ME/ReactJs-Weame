import React from 'react';
import './NavBarIndex.css';
import Logo from './logo.png';

export function NavBarIndex() {
    return (
        
        <div className="container-" id="fundo">

        <header className="d-flex flex-wrap align-items-center justify-content-center minha-class py-3 ">
            
                <a href="#" className="d-flex col-md-2 mb-2 mb-md-0 text-dark text-decoration-none ">
                    <img className="logo" src={Logo} title="We-a-Me" alt="We-a-Me Logo" />
                </a>
    
                <ul className="navbarletra nav col-12 col-md-auto mb-2 mb-md-0" id='navbar'>
                    <a href="#" className="nav-link px-2" >Categorias</a>
                    <a href="#" className="nav-link px-2" >Para Profissionais</a>
                    <a href="#" className="nav-link px-2 " >Suporte</a>
                   <a href="#" className="nav-link px-2 " >Como Funciona</a>
                    <a href="#" className="nav-link px-2 " >Sobre nós</a>
                </ul>
    
                <div className="col-md-3 text-end">
                    <a href="#" id="criarconta">Criar conta</a>
                    <button type="button" className="entrar btn btn-link" >Entrar</button>
                </div>
        </header>
    </div>

    );
  }