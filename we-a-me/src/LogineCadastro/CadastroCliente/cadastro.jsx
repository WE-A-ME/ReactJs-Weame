import React from "react";
import cadastro from "./cadastro.css";
import Logo from './img/logo.png'
import LogoGoogle from "../img/CadastroEmpresa/img-google.png";
import LogoLinkedin from "../img/CadastroEmpresa/img-linkedin.png";
import Cadastro from "../img/CadastroEmpresa/img-cadastro.png";

export function CadastroEmpresa() {
  return (
    <div>
      <img className="header--logo" src={Logo} alt="" />
      <div class="conteudo">
        <div class="main--img">
          <img src={img_cadastro} alt="" />
        </div>
        <div class="main--login">
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