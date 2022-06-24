import React from 'react';
import './NavbarCategorias.css';
import { Link } from "react-router-dom";

export function NavbarCategoriasLogin() {
    return (
        <div className="container-fluid" id="servicos">
            <ul className="nome-categorias nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 mt-0">
                <Link to='/reformas' className="nav-link px-2" id="navbarletra">Reformas e Reparo</Link>
                <a href="#" className="nav-link px-2" id="navbarletra">Beleza</a>
                <a href="#" className="nav-link px-2 " id="navbarletra">Auto</a>
                <a href="#" className="nav-link px-2 " id="navbarletra">Assistência Técnica</a>
                <a href="#" className="nav-link px-2 " id="navbarletra">Alimentos</a>
                <a href="#" className="nav-link px-2 " id="navbarletra">Programação</a>
                <a href="#" className="nav-link px-2 " id="navbarletra">Limpeza</a>
                <a href="#" className="nav-link px-2 " id="navbarletra">Design</a>
                <a href="#" className="nav-link px-2 " id="navbarletra">Comércio</a>
                <a href="#" className="nav-link px-2 " id="navbarletra">Moda</a>
            </ul>
            <div className="linhahorizontal"></div>
        </div>
    );
  }