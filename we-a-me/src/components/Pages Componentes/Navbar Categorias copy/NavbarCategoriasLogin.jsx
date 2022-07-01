import React from 'react';
import './NavbarCategorias.css';
import { Link } from "react-router-dom";

export function NavbarCategoriasLogin() {
    return (
        <div className="container-fluid" id="servicos">
            <ul className="nome-categorias nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 mt-0">
                <Link to='/paginacliente-reformas' className="nav-link px-2" id="navbarletra">Reformas e Reparo</Link>
                <Link to='/paginacliente-beleza' className="nav-link px-2" id="navbarletra">Beleza</Link>
                <Link to='/paginacliente-auto' className="nav-link px-2" id="navbarletra">Auto</Link>
                <Link to='/paginacliente-/assistencia' className="nav-link px-2" id="navbarletra">Assistência Técnica</Link>
                <Link to='/paginacliente-alimentos' className="nav-link px-2" id="navbarletra">Alimentos</Link>
                <Link to='/paginacliente-programacao' className="nav-link px-2" id="navbarletra">Programação</Link>
                <Link to='/paginacliente-limpeza' className="nav-link px-2" id="navbarletra">Limpeza</Link>
                <Link to='/paginacliente-design' className="nav-link px-2" id="navbarletra">Design</Link>
                <Link to='/paginacliente-comercio' className="nav-link px-2" id="navbarletra">Comércio</Link>
                <Link to='/paginacliente-moda' className="nav-link px-2" id="navbarletra">Moda</Link>
            </ul>
            <div className="linhahorizontal"></div>
        </div>
    );
  }