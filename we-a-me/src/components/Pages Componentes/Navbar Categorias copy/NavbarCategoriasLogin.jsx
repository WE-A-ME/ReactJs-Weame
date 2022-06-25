import React from 'react';
import './NavbarCategorias.css';
import { Link } from "react-router-dom";

export function NavbarCategoriasLogin() {
    return (
        <div className="container-fluid" id="servicos">
            <ul className="nome-categorias nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 mt-0">
                <Link to='/loginreformas' className="nav-link px-2" id="navbarletra">Reformas e Reparo</Link>
                <Link to='/loginbeleza' className="nav-link px-2" id="navbarletra">Beleza</Link>
                <Link to='/loginauto' className="nav-link px-2" id="navbarletra">Auto</Link>
                <Link to='/loginassistencia' className="nav-link px-2" id="navbarletra">Assistência Técnica</Link>
                <Link to='/loginalimentos' className="nav-link px-2" id="navbarletra">Alimentos</Link>
                <Link to='/loginprogramacao' className="nav-link px-2" id="navbarletra">Programação</Link>
                <Link to='/loginlimpeza' className="nav-link px-2" id="navbarletra">Limpeza</Link>
                <Link to='/logindesign' className="nav-link px-2" id="navbarletra">Design</Link>
                <Link to='/logincomercio' className="nav-link px-2" id="navbarletra">Comércio</Link>
                <Link to='/loginmoda' className="nav-link px-2" id="navbarletra">Moda</Link>
            </ul>
            <div className="linhahorizontal"></div>
        </div>
    );
  }