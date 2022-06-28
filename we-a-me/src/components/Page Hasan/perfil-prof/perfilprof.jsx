import React from "react";
import perfilprof from "./perfilprof.css";
import img_pintor from "./img/pintor.png";
import img_pontoazul from "./img/Vector.svg";
import img_martelo from "./img/Vector2.svg";
import img_livro from "./img/book-reader.svg";
import img_fundo02 from "./img/Fundo-02.png";
import img_fundo03 from "./img/Fundo-03.png";
import img_fundo04 from "./img/Fundo-04.png";
import img_fundo05 from "./img/Fundo-05.png";
import img_fundo06 from "./img/Fundo-06.png";
import img_fundo07 from "./img/image 5.png";
import avaliacao from "./avaliacao";
import vectorWhats from "./img/VectorWhatsapp.png";
import {NavBar} from "../../Pages Componentes/NavBar Input"
import {Footer} from "../../Pages Componentes/Footer"

export function PerfilProf (){
    return(
        <div>
            <NavBar/>
            <div className="hight">
        <div className="box1">
            <img src={img_pintor} className="img" alt="..."/>
            <h2>Jaison Costa Dos Santos</h2>
            <h3>Pintor e Consertos Residenciais</h3>
            <div className="info">
                <div className="icons">
                    <img src={img_pontoazul} alt="ponto azul de localização"/>
                    <p>17 Serviços</p>
                </div>
                <div className="icons">
                    <img src={img_martelo} alt="martelo de cor azul, representando o trabalho realizado."/>
                    <p>São Paulo</p>
                </div>
            </div>
        </div>
        <div className="estrelas">
            <p>Avaliação do Profissional</p>
            <ul className="avaliacao">
                <li className="star-icon ativo" data-avaliacao="1"></li>
                <li className="star-icon" data-avaliacao="2"></li>
                <li className="star-icon" data-avaliacao="3"></li>
                <li className="star-icon" data-avaliacao="4"></li>
                <li className="star-icon" data-avaliacao="5"></li>
            </ul>
        </div>
        <div className="contato">
            <h2>Meu contato</h2>
            <p>(11) 98765-0987</p>
            <img src={vectorWhats} className="img-icon" alt="..."/>
        </div>
    </div>
    <main>
        <section>
            <div className="boxinfos">
                <h2>Jaison Costa Dos Santos</h2>
                <div className="idade-grade">
                    <h3>27 Anos</h3>
                    <img src={img_livro} alt=""/>
                    <h3>Formado em Arte e Pintura - 2018</h3>
                </div>
                <p>
                    Olá eu me chamo Jailson, tenho 27 anos, fiz curso de Artes e Pintura na USP. Fui o melhor aluno da
                    minha turma
                    levando até prêmios por o meu desempenho e meus projetos durante as aulas. Durante essa época
                    comecei
                    atender a consertos residenciais por conhecimentos do meu pai que oferecia serviços sobre isso, ele
                    me
                    ensinou o básico para mim, então eu tive muita dificuldade por não ter conhecimentos técnicos
                    suficientes
                    para poder atender o meu cliente, logo fui pedir ao meu pai para ensinar mais sobre consertos
                    residenciais.
                    Depois de ter ficando especialista muitas pessoas do meu bairro começaram a me chamar para ajudar
                    nas suas
                    casas, fui muito elogiado por os meus serviços de Marido de Aluguel. Após ter conseguindo terminar a
                    minha
                    faculdade, comecei a oferecer os meus serviços de pinturas do meu bairro e novamente fui muito
                    elogiado pelo
                    meu talento. Atualmente presto serviço de consertos residenciais e de pinturas na Zona Oeste de São
                    Paulo ou
                    em Osasco, sempre procuro ajudar o meu cliente no máximo de expectativas dele. Estou ansioso para
                    poder
                    atender você.
                </p>
            </div>
        </section>
        <h2 className="text-front">Serviços Já Realizados</h2>
        <div className="row">
            <div className="card blue">
                <h2>Montar a churrasqueira.</h2>
                <p>Serviços Realizado em 21/03/2020</p>
                <img className="image" src={img_fundo02} alt="" />
            </div>

            <div className="card blue">
                <h2>Consertar o portão.</h2>
                <p>Serviços Realizado em 12/03/2020</p>
                <img className="image" src={img_fundo03} alt="" />
            </div>

            <div className="card blue">
                <h2>Pintura que fiz na escola do meu bairro.</h2>
                <p>Serviços Realizado em 12/06/2020</p>
                <img className="image" src={img_fundo04} alt="" />
            </div>

            <div className="card blue">
                <h2>Conserto com ármario.</h2>
                <p>Serviços Realizado em 09/08/2020</p>
                <img className="image" src={img_fundo05} alt="" />
            </div>

            <div className="card blue">
                <h2>Conserto com o chuveiro.</h2>
                <p>Serviços Realizado em 07/09/2020</p>
                <img className="image" src={img_fundo06} alt="" />
            </div>

            <div className="card blue">
                <h2>Conserto com a porta do banheiro e o chuveiro.</h2>
                <p>Serviços Realizado em 12/03/2020</p>
                <img className="image" src={img_fundo07} alt="" />
            </div>
        </div>
    </main>
    <Footer/>
    </div>
    )
}