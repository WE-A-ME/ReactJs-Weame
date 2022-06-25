import React from "react";
import oqvcp from "./OqVcP.css";
import { NavBarIndex } from "../../Pages Componentes/NavBar Index/NavBarIndex";
import { Footer } from "../../Pages Componentes/Footer/footer";

export function OqVcP(){
    
 return(
    <div>
        <NavBarIndex/>
            <div className="conteudo">

<h1 className="h1">O que você precisa saber!</h1>
<br/>
<p> </p> A We-a-Me é uma plataforma pensada para trazer acessibilidade e visibilidade para microempreendedores e autônomos. <br/>
    Pensando nessa perspectiva trazemos a vocês fácil acesso a trabalhos gerais e prestação de serviços. <br/>
    Estamos localizados na grande São Paulo, por enquanto só atendemos nas regiões metropolitanas de São Paulo<br/>

<p> </p> <br/>

<h2 class="duvidas">Dúvidas? Acesse nossos outros tópicos.</h2>
</div>

        <Footer/>

    </div>

 );
}