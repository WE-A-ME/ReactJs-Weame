import React from "react";
import login from "./login.css";
import logo from "../img/img-rodape.png";
import img_login from "../img/LoginCliente/img-Login.png";
import logo_google from "../img/CadastroEmpresa/img-google.png";
import logo_linkedin from "../img/CadastroEmpresa/img-linkedin.png";


export function LoginCliente() {
  return (
    <div>
      <img className="logo" src={logo} alt="" />
      <div className="conteudo">
        <div className="main--img">
          <img src={img_login} alt="" />
        </div>

        <div className="main--login">
          <div className="main--inputs">
            <input className="button-email" type="text" placeholder="E-mail ou CPF/CNPJ" />
            <input className="button-senha" type="password" placeholder="Senha" />
            <button className="btn-entrar">Entrar</button>
            <a href="#">ou cadastre-se aqui !</a>
            <button className="btn--login--google"><img src={logo_google} alt="" />Entrar com o Google</button>
            <button className="btn--login--linkedin"><img src={logo_linkedin} alt="" /> Entrar com o Linkedin</button>
          </div>
        </div>
      </div>
    </div>
  );
}