import React from "react";
import login from "./login.css";
import logo from "./img/logo.png";
import img_login from "./img/img-Login.png";
import logo_google from "./img/img-google.png";
import logo_linkedin from "./img/img-linkedin.png";
import { Link } from "react-router-dom";


export function LoginCliente() {
  return (
    <div>
      <div className="container-">
        <a href="/"><img className="header--logo" src={logo} alt="" /></a>
        <div className="conteudo">
          <div >
            <img className="main--img" src={img_login} alt="" />
          </div>

          <div className="main--login">
            <div className="main--inputs">
              <input className="button-email" type="text" placeholder="E-mail ou CPF/CNPJ" />
              <input className="button-senha" type="password" placeholder="Senha" />
              <a href="/paginacliente"><button className="btn-entrar">Entrar</button></a>
              <a href="/cadastrocliente">ou cadastre-se aqui !</a>
              <button className="btn--login--google"><img className="img-redes" src={logo_google} alt="" />Entrar com o Google</button>
              <button className="btn--login--linkedin"><img className="img-redes" src={logo_linkedin} alt="" /> Entrar com o Linkedin</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}