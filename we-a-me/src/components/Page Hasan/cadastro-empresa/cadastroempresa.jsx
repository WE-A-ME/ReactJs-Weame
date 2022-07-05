import React from "react";
import "./cadastroempresa.css";
import img_logo from "./img/logo.png";
import group from "./img/Group 47450.png";
import { Link } from "react-router-dom";

export function CadastroEmpresa(){
    return (
        <div className="cadastroempresa">
            <main>
                <div> 
                  <Link to="/"><img className="logo" src={img_logo} alt=""/></Link>
                </div>
                <div className="conteudo">
                    <img src={group} alt="" className="imagem"/>
                    <div className="caixaazul">
                        <div className="titulocadastro"><h1>Seja um Parceiro</h1></div>
                        <div className="caixaparaform">
                            <input type="text" placeholder=" Nome Completo" className="caixadetexto"/>
                            <input type="text" placeholder=" CPF ou CNPJ" className="caixadetexto"/>
                            <input type="email" placeholder=" Digite seu Email" className="caixadetexto"/>
                            <input type="tel" placeholder=" Digite seu Telefone" className="caixadetexto"/>
                            <input type="password" placeholder=" Digite sua Senha" className="caixadetexto"/>
                        </div>
                            <button className="btn-cadastro"><Link to='/cadastroempresa-localizacao'>Cadastrar-se</Link></button>
                    </div>
                </div>
            </main>
        </div>
    );
}