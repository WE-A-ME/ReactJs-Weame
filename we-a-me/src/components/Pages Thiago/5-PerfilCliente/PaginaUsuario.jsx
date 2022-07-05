import React from "react";
import { Footer } from "../../Pages Componentes/Footer/footer";
import "./PaginaUsuario.css";
import NavBar from "../../Pages Componentes/NavBar Input/navbar";
import img_Profissional from "../img/img_profissional.svg";

export function PerfilUsuario() {
    return (
        <div>
            <NavBar />

            <main>
                <div className="main--profissional">
                    <div className="container-">
                        <div className="main--img"><img src={img_Profissional} alt="" />
                        </div>

                        <button type="button" className="btn-alterar-foto">Alterar Foto</button>

                    </div>
                </div>

                <h2 className="main--text">Dados Pessoais</h2>
                <div className="main--dados-pessoais">

                    <div className="Buttons">
                        <div className="main--buttons-1">
                            <div className="buttons">
                                <h2>Nome</h2>
                                <button type="button">Antônio</button>
                            </div>
                            <div className="buttons">
                                <h2>Sobrenome</h2>
                                <button type="button">Soares</button>
                            </div>
                            <div className="buttons">
                                <h2>Email</h2>
                                <button type="button">Antônio.Soares@gmail.com</button>
                            </div>
                        </div>
                        <div className="main--buttons-2">
                            <div className="buttons">
                                <h2>Tipo Empreendedor</h2>
                                <button type="button">MEI</button>
                            </div>
                            <div className="buttons">
                                <h2>Categoria</h2>
                                <button type="buttons">Pintor</button>
                            </div>
                            <div className="buttons">
                                <h2>Telefone</h2>
                                <button type="button">11 91234-5678</button>
                            </div>
                        </div>
                    </div>


                    <button className="btn-editar" type="button">Editar</button>

                </div>

                <h2 className="main--text">Senha de Segurança</h2>

                <div className="main--senha">

                    <div className="Buttons">
                        <div className="main--buttons-3">
                            <div className="buttons">
                                <h2>Senha</h2>
                                <button type="button"></button>
                            </div>
                        </div>

                        <div className="main--buttons-4">
                            <div className="buttons">
                                <h2>Digite uma Nova Senha</h2>
                                <button type="button"></button>
                                <h2>Confirme a Nova Senha</h2>
                                <button type="button"></button>
                            </div>
                        </div>
                        
                    </div>
                    <button className="btn-editar" type="button">Alterar Senha</button>
                </div>

                <h2 className="main--text">Endereço</h2>

                <div className="main--endereco">

                    <div className="Buttons">
                        <div className="main--buttons-5">
                            <div className="buttons">
                                <h2>CEP</h2>
                                <button type="button"></button>
                            </div>
                            <div className="buttons">
                                <h2>Estado</h2>
                                <button type="button"></button>
                            </div>
                            <div className="buttons">
                                <h2>Cidade</h2>
                                <button type="button"></button>
                            </div>
                        </div>

                        <div className="main--buttons-6">
                        <div className="buttons">
                                <h2>Bairro</h2>
                                <button type="button"></button>
                            </div>
                            <div className="buttons">
                                <h2>Lougradouro</h2>
                                <button type="button"></button>
                            </div>
                            <div className="buttons">
                                <h2>Numero</h2>
                                <button type="button"></button>
                            </div>
                        </div>
                        
                    </div>
                    <div className="endereco">
                        <button className="btn-adicionar col-2" type="button">Editar Endereço</button>
                        <button className="btn-adicionar" type="button">Adicionar Endereço</button>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}