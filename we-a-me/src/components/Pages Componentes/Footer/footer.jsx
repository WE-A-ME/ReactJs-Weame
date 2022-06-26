import React from "react";
import './Footer.css';
import Logo from './logo.png';

export function Footer() {
    return (


        <div class="container-">
            <footer class=" p-2">
                <div class="row text-center justify-content-center">

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
                        <a href="#Saude & Beleza">Saúde &
                            Beleza</a>
                        <a href="#Auto">Auto</a>
                        <a href="/moda">Moda</a>
                        <a href="#Limpeza" class="">Limpeza</a>

                    </div>

                    <div class="footer--topicos col-2">
                        <h5>Para Profissionais</h5>

                        <a id="footer--topicos--01" href="#">Como se Cadastrar!</a>
                        <a id="footer--topicos--01" href="#">Iniciar Cadastro</a>

                    </div>

                    <div class="footer--topicos--copy col-12">
                    <p>&copy; 2022 We-A-Me. Todos Direitos Reservado.</p>

                </div>
                </div>

                
            </footer>
        </div>

























        // <footer>
        //     <div>

        //         <div>
        //             <a href="../1-Index/index.html"><img className="logo" src={img} alt=""/></a>
        //         </div>
        //         <div className="footer--topicos">
        //             <h5>Como Funciona</h5>
        //             <a href="#">O que você precisa saber
        //                 ?</a>
        //             <a href="#">Como Avaliar</a>
        //             <a href="#">Como ser Parceiro</a>
        //             <a href="#">Contratos</a>
        //         </div>
        //         <div className="footer--topicos">
        //             <h5>Categorias</h5>
        //             <a href="#Reformas e Reparos">Reformas
        //                 e Reparos</a>
        //             <a href="#Saude & Beleza">Saúde &
        //                 Beleza</a>
        //             <a href="#Auto">Auto</a>
        //             <a href="#Moda">Moda</a>
        //             <a href="#Limpeza">Limpeza</a>
        //         </div>
        //         <div className="footer--topicos">
        //             <h5>Para Profissionais</h5>
        //             <a href="#">Como se Cadastrar!</a>
        //             <a href="#">Iniciar Cadastro</a>
        //         </div>
        //         <div className="btn">
        //             <form>
        //                 <h5>Entre em contato !</h5>
        //                 <p>Alguma duvida ou sugestão ? </p>
        //                 <div>
        //                     <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
        //                     <input id="newsletter1" type="text" className="form-control" placeholder="Digite Aqui !"/>
        //                     <button type="button">Enviar</button>
        //                 </div>
        //             </form>
        //         </div>
        //     </div>
        //     <div className="footer--topicos--copy">
        //         <p>&copy; 2022 We-A-Me.Todos Direitos Reservado.</p>
        //     </div>
        // </footer >

    );
}