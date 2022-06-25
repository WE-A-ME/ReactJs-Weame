import React from "react";
import "./ComoSerParceiro.css";
import { NavBarIndex } from "../../Pages Componentes/NavBar Index/NavBarIndex";
import { Footer } from "../../Pages Componentes/Footer/footer";

export function ComoSerParceiro() {

    return (
        <div>
            <NavBarIndex />

            <div className="conteudo">

                <h1 className="h1">Como ser Parceiro na WE-A-ME.</h1>
                <br />
                <p> </p> Para ser Parceiro na nossa plataforma é necessário ter uma Microempresa ou ser Autônomo.<br />
                É feita uma avaliação de perfil para autônomos e uma avaliação de qualidade de mercadoria para as microempresas. <br />
                Ao seguir concordar com as diretrizes da plataforma você é responsavél pelos seus materias e contratos<br />

                <p> </p> <br />

                <h2 class="duvidas">Dúvidas? Acesse nossos outros tópicos.</h2>
            </div>
            <Footer />
        </div>

    );
}