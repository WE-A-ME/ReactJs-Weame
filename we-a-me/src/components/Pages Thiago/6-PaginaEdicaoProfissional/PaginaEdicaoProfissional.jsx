import React from "react";
import { Footer } from "../../Pages Componentes/Footer/footer";
import { NavBarIndex } from "../../Pages Componentes/NavBar Index/NavBarIndex";
import "./PaginaEdicaoProfissional.css";
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
                            <h3>Ajulegista</h3>
                        </div>

                        <div className="info">
                            <ul class="nav col-12" id="informacoes4">
                                <li> <i class="fa-solid fa-location-dot"></i>  Osasco</li>
                                <li> <i class="fa-solid fa-hammer"></i>  17 Serviços</li>
                            </ul>
                        </div>
                    </div>

                    <section>
                        <div className="boxinfos">
                            <h2>Jorge dos Santos</h2>
                            <div className="idade-grade">
                                <h3>Idade</h3>
                                <h3>Formação</h3>
                            </div>
                            <form action="">
                                <input type="text" placeholder="Adicione sua biografia" />
                            </form>
                        </div>
                    </section>

                    <section>
                        <h2>Servicos Já Realizados</h2>
                        
                    <div class="btn-group" role="group">
                        <button id="btnGroupDrop1" type="button" class="bttn btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa-solid fa-circle-plus"></i> Adicionar Serviços Realizados
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">

                            <section>
                                <div className="box-edicao">
                                    <div>
                                        <img src={img_edicao} alt="" />
                                    </div>
                                    <input type="text" placeholder="Adicione um titulo para este serviço" />

                                    <button className="btn-data" type="text" ><i class="fa-solid fa-calendar-check"></i> Adicionar data da realização </button>
                                
                                </div>
                            </section>
                            
                        </ul>
                    </div>
                    </section>



                </div>
            </main>

            <Footer />
        </div>
    );
}