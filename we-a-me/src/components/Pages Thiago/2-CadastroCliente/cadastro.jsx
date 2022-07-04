import React from "react";
import cadastro from "./cadastro.css";
import Logo from './img/logo.png';
import logo_google from "./img/img-google.png";
import logo_linkedin from "./img/img-linkedin.png";
import img_cadastro from "./img/img-cadastro.png";
import { Link } from "react-router-dom";

export function CadastroCliente() {
  return (
    <div className="cadastropagina container-">
      <header>
        <Link to='/'><img className="header--logo" src={Logo} alt="" /></Link>
      </header>


      <div className="conteudo">
        <div >
          <img className="main--img" src={img_cadastro} alt="" />
        </div>

        <div className="main--cadastro">



          <div className="main--title col-12">
            <h2 id="h1">Cadastra-se. <br /> É rápido e fácil </h2>
          </div>
{/*  */}
          <div className="main--inputs">
            <form action="">
              <input className="button-nome" type="text" placeholder="Nome Completo" />
              <input className="button-cpf" type="number" placeholder="CPF" pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})" />
              <input className="button-email" type="text" placeholder="E-mail" />
              <input className="button-tel" type="text" placeholder="Telefone" />
              <input className="button-senha" type="password" placeholder="Senha" />
            </form>
            <button className="btn-entrar">Cadastrar</button>
            <a href="/logincliente">Já tenho uma conta !</a>
            <button className="btn--login--google"><img className="img-btns" src={logo_google} alt="" /> Cadastrar com o Google</button>
            <button className="btn--login--linkedin"><img className="img-btns" src={logo_linkedin} alt="" /> Cadastrar com o Linkedin</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// *Front-End




