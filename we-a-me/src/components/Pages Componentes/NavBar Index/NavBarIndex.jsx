import React from 'react';
import './NavBarIndex.css';
import Logo from './logo.png';
import { Link } from "react-router-dom";
import { Index } from '../../Pages Thiago/1-Index';

export function NavBarIndex() {
    return (

        <div>

            <div className="container-" id="fundo">

                <header className="d-flex flex-wrap align-items-center justify-content-center minha-class py-3 ">

                    <Link className="d-flex col-md-2 mb-2 mb-md-0 text-dark text-decoration-none" to="/">
                        <img className="logo" src={Logo} title="We-a-Me" alt="We-a-Me Logo" />
                    </Link>

                    <ul className="navbarletra nav col-12 col-md-auto mb-2 mb-md-0" id='navbar'>
                        <Link className="nav-link px-2" to="/categorias">Categorias</Link>
                        <a href="#" className="nav-link px-2" >Para Profissionais</a>
                        <Link className="nav-link px-2" to="/suporte">Suporte</Link>
                        <a href="#" className="nav-link px-2 " >Como Funciona</a>
                        <Link className="nav-link px-2" to="/sobrenos">Sobre Nós</Link>
                    </ul>

                    <div className="col-md-3 text-end">
                        <Link id="criarconta"  to="/cadastrocliente">Criar conta</Link>
                        <button type="button" className="entrar btn btn-link" ><Link to='logincliente' >Entrar</Link></button>
                    </div>
                </header>
            </div>

        </div>

    );
}