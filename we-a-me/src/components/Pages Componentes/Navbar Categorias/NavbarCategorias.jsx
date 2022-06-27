import React from 'react';
import './NavbarCategorias.css';
import { Link } from "react-router-dom";

export function NavbarCategorias() {
    return (
        <div className="container-fluid" id="servicos">
            <ul className="nome-categorias nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 mt-0">
                <Link to='/categorias/reformas' className="nav-link px-2" id="navbarletra">Reformas e Reparo</Link>
                <Link to='/categorias/beleza' className="nav-link px-2" id="navbarletra">Beleza</Link>
                <Link to='/categorias/Auto' className="nav-link px-2" id="navbarletra">Auto</Link>
                <Link to='/categorias/Assistencia' className="nav-link px-2" id="navbarletra">Assistência Técnica</Link>
                <Link to='/categorias/Alimentos' className="nav-link px-2" id="navbarletra">Alimentos</Link>
                <Link to='/categorias/Programacao' className="nav-link px-2" id="navbarletra">Programação</Link>
                <Link to='/categorias/Limpeza' className="nav-link px-2" id="navbarletra">Limpeza</Link>
                <Link to='/categorias/Design' className="nav-link px-2" id="navbarletra">Design</Link>
                <Link to='/categorias/Comercio' className="nav-link px-2" id="navbarletra">Comércio</Link>
                <Link to='/categorias/moda' className="nav-link px-2" id="navbarletra">Moda</Link>
            </ul>
            <div className="linhahorizontal"></div>
        </div>
    );
  }