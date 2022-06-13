import React from "react";
import App from '../../App.css';
import img from '../img/img-rodape.png';

export function Header() {
    return(
        <header>
           <div>
            <a href="../1-Index/Index.html"><img className="logo" src={img} alt="Logo da We-a-Me"/></a>
        </div>

        <div className="header--items">
            <a href="#Categorias">Categorias</a>
            <a href="#Para Profissionais">Para Profissionais</a>
            <a href="#Suporte">Suporte</a>
            <a href="#Como Funciona">Como Funciona</a>
            <a href="../8-SobreNos/SobreNos.html">Sobre Nós</a>
        </div>

        <div className="header--buttons">
            <a className="button" href="../11-CadastroCliente/CadastroCliente.html">Criar Conta</a>
            <button><a className="button--entrar" href="../12-LoginCliente/Login_index.html">Entrar</a></button>
        </div>
        </header>
    );
}