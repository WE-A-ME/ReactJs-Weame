import React from "react";
import "./Localizacao.css";
import Imagem from "./img/imagem.png"
import img_logo from "./img/logo.png";

import { Link } from "react-router-dom";

export function Localizacao(){
    return (
        <div>
            <main>
                <div> 
                  <Link to="/"><img className="logo" src={img_logo} alt=""/></Link>
                </div>
                <div className="conteudolocalizacao">
                    <img src={Imagem} alt="" className="imagemlocalizacao"/>
                    <div className="localizacao">
                       <div className="titulolocalizacao"><h2>Dados de Localização</h2></div>
                            <input type="text" placeholder="CEP" className="caixadetextolocalizacao"/>
                            <input type="text" placeholder="Estado" className="caixadetextolocalizacao"/>
                            <input type="text" placeholder="Cidade" className="caixadetextolocalizacao"/>
                            <input type="text" placeholder="Bairro" className="caixadetextolocalizacao"/>
                            <input type="text" placeholder="Logradouro" className="caixadetextolocalizacao"/>
                            <input type="text" placeholder="Número" className="caixadetextolocalizacao"/>
                            <input type="text" placeholder="Complemento" className="caixadetextolocalizacao"/>
                            <button className="btn botaolocalizacao"><Link to='/edição-pagina-profissional'>Entrar</Link></button>
                    </div>
                    
                </div>
            </main>
        </div>
    );
}