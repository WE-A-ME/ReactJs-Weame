import React from "react";
import './Footer.css';
import Logo from './logo.png';

export function Footer() {
    return (


        <div class="container-">
            <footer class="">
                <div class="container- row  justify-content-center">

                    <div className="col-1">
                        <a href="#"><img className="footer--logo" src={Logo} alt="" /></a>
                    </div>

                    <div class="footer--topicos col-2">
                        <h5>Como Funciona</h5>

                        <a href="/OqVcP">O que você precisa saber
                            ?</a>
                        <a href="/comoavaliar">Como Avaliar</a>
                        <a href="/comoserparceiro">Como ser Parceiro</a>
                        <a href="/contratos">Contratos</a>

                    </div>


                    <div class="footer--topicos col-3">
                        <h5>Categorias mais Procuradas</h5>

                        <a href="/reformas">Reformas
                            e Reparos</a>
                        <a href="/beleza">Saúde &
                            Beleza</a>
                        <a href="/Auto">Auto</a>
                        <a href="/moda">Moda</a>
                        <a href="/Limpeza" class="">Limpeza</a>

                    </div>

                    <div class="footer--topicos col-2">
                        <h5>Para Profissionais</h5>

                        <a id="footer--topicos--01" href="/paraprofissionais">Como se Cadastrar!</a>
                        <a id="footer--topicos--01" href="/cadastroempresa">Iniciar Cadastro</a>

                    </div>

                    <div class="footer--topicos--copy col-4">
                        <p>&copy; 2022 We-A-Me. Todos Direitos Reservados.</p>

                    </div>
                </div>


            </footer>
        </div>

    );
}