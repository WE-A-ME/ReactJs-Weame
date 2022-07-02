import React from "react";
import comofunciona from "./ComoFunciona.css";
import img_comofunciona from "../como-funciona/img/comofunciona.png"
import { NavBarIndex } from "../../Pages Componentes/NavBar Index/NavBarIndex"
import { Footer } from "../../Pages Componentes/Footer/footer";
import { Link } from "react-router-dom";

export function ComoFunciona() {
  return (
  <div> 
    <NavBarIndex/>
     <div className="conteudo">
        <div className="buttonscomofunciona">
           <Link to="/OqVcP"><button><a href="">O que você precisa saber ?</a></button></Link>
           <Link to="/comoavaliar"><button><a href="">Como avaliar ?</a></button></Link>
           <Link to="/comoserparceiro"><button><a href="">Como ser nosso parceiro ?</a></button></Link>
           <Link to="/contratos"><button><a href="">Contratos</a></button></Link>
        </div>
        <div className="imagemcomofunciona">
            <img src={img_comofunciona} alt=""/>
        </div>
    </div>
    <Footer/>
  </div>
  );
}
