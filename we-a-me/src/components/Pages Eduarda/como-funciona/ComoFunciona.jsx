import React from "react";
import comofunciona from "./ComoFunciona.css";
import img_comofunciona from "../como-funciona/img/comofunciona.png"
import { NavBarIndex } from "../../Pages Componentes/NavBar Index/NavBarIndex"
import { Footer } from "../../Pages Componentes/Footer/footer";

export function ComoFunciona() {
  return (
  <div> 
    <NavBarIndex/>
     <div className="conteudo">
        <div className="buttons">
            <button><a href="">O que você precisa saber ?</a></button>
            <button><a href="">Como avaliar ?</a></button>
            <button><a href="">Como ser nosso parceiro ?</a></button>
            <button><a href="">Contratos</a></button>
        </div>
        <div className="imagem">
            <img src={img_comofunciona} alt=""/>
        </div>
    </div>
    <Footer/>
  </div>
  );
}
