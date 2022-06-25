import React from "react";
import { NavBarIndex } from "../../Pages Componentes/NavBar Index/NavBarIndex";
import { Footer } from "../../Pages Componentes/Footer/footer";
import comoavaliar from "./ComoAvaliar.css";

export function ComoAvaliar() {

    return (
        <div>
            <NavBarIndex />
            <div className="conteudo">

                <h1 className="h1" >Como avaliar.</h1>
                <p>  </p>As avaliações podem ser feitas no aplicativo com notas de 1 a 5 nas estrelas<br />
                Da média dessas pontuações, representadas por estrelas, é apresentada a nota geral.<br />
                Essa nota final tem grande importância, uma vez que 100% das estrelas estejam preenchidas, melhor é a avaliação do Parceiro.<br />
                Você só conseguirá avaliar um Parceiro WE-A-ME se contratar um serviço dele e já estar finalizado. <br />
                Todas as avaliações são monitoradas pelo  Nosso Suporte, trazendo para você cliente e para nossos parceiros confiança e integridade!<br />
                A avaliação funciona de forma segura e anônima.
                <p> </p> <br />

                <h2 class="duvidas">Dúvidas? Acesse nossos outros tópicos.</h2>
            </div>
            <Footer />
        </div>



    );
} 