import React from "react";
import { Footer } from "../../Pages Componentes/Footer/footer";
import { NavBarIndex } from "../../Pages Componentes/NavBar Index/NavBarIndex";
import  "./PaginaEdicaoProfissional.css";
import img_edicao from "../img/img_edição_profissional.svg";


export function EdicaoProfissional() {
    return (
        <div>
            <NavBarIndex />

            <main>
                <div className="container-">
                    <div className="conteudo-img-profissional">
                        <div className="img--profissional">
                            <img src={img_edicao} alt="" />
                        </div>
                            <div className="info--profissional">
                                <h2>Jorge dos Santos</h2>
                                <p>Ajulegista</p>
                            </div>
                            <div className="icons">
                            <i class="fa-solid fa-location-pin"></i>
                            Salve

                            <i class="fa-regular fa-hammer"></i>
                            </div>
                    </div>


                  
                </div>
            </main>

            <Footer />
        </div>
    );
}