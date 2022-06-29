import React from "react";
import paraprofissionais from "./para-profissionais.css";
import img_paraprofissionais from "../para-profissionais/img/para_profissionais.png"
import { NavBarIndex } from "../../Pages Componentes/NavBar Index/NavBarIndex"
import { Footer } from "../../Pages Componentes/Footer/footer";
import { Link } from "react-router-dom";

export function ParaProfissionais() {
  return (
  <div> 
    <NavBarIndex/>
    <div className="texto">
      <h1>Você é um Profissional ou Autônomo ?</h1>
    </div>
    <div className="paragrafo">
      <p>Se você presta serviços e/ou tem um comercio, saiba  <br/>
        que você pode fazer parte da nossa plataforma. <br/> 
        Nós te ajudaremos a alavancar o seu negócio. </p>
    </div>
    <div className="btn-cadastro">
      <Link to="/cadastroempresa"><button><a href="">Começar cadastro</a></button></Link>
    </div>
    <div className="img_profissionais">
      <img src={img_paraprofissionais}></img>
    </div>
    <Footer/>
  </div>
  );
}
