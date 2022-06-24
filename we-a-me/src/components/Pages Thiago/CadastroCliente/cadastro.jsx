import React from "react";
import cadastro from "./cadastro.css";
import Logo from './img/logo.png';
import logo_google from "./img/img-google.png";
import logo_linkedin from "./img/img-linkedin.png";
import img_cadastro from "./img/img-cadastro.png";
import { Link } from "react-router-dom";

export function CadastroCliente() {
  return (
    <div className="container-">
     <Link to='/'><img className="header--logo" src={Logo} alt="" /></Link>
      <div class="conteudo">
        <div class="main--img">
         <img src={img_cadastro} alt="" /> 
        </div>
        <div class="main--cadastro">
          <div class="main--inputs">
            <input class="button-nome" type="text" placeholder="Nome Completo" />
            <input class="button-email" type="text" placeholder="E-mail ou CPF/CNPJ" />
            <input class="button-senha" type="password" placeholder="Senha" />
            <button class="btn-entrar">Cadastrar</button>
            <a href="../12-LoginCliente/Login_index.html">Já tenho uma conta !</a>
            <button class="btn--login--google"><img src={logo_google} alt="" /> Cadastrar com o Google</button>
            <button class="btn--login--linkedin"><img src={logo_linkedin} alt="" /> Cadastrar com o Linkedin</button>
          </div>
        </div>
      </div>
    </div>
  );
}