import React from "react";
import home from "./home.css";
import img_profissional_01 from "../img/home/img_profissional_01.png";
import img_profissional_02 from "../img/home/img_profissional_02.png";
import img_profissional_03 from "../img/home/img_profissional_03.png";
import img_profissional_04 from "../img/home/img_profissional_04.png";
import img_comercio_01 from "../img/home/img_comercio_01.png";
import img_comercio_02 from "../img/home/img_comercio_02.png";
import img_comercio_03 from "../img/home/img_comercio_03.png";
import img_comercio_04 from "../img/home/img_comercio_04.png";
import img_box_01 from "../img/home/img_box_01.svg";
import img_box_02 from "../img/home/img_box_02.svg";
import img_Reformas from "../img/home/img-Reformas.png";
import img_Auto from "../img/home/img-Auto.png";
import img_Assistencia from "../img/home/img-Assistencia.png";
import img_Limpeza from "../img/home/img-Limpeza.png";
import img_Programacao from "../img/home/img-Programacao.png";
import img_Moda from "../img/home/img-Moda.png";
import { Header } from "../Header/header";
import { Footer } from "../Footer/footer";

export function Index() {
    return (
        <div>
            <Header />

            <main>
                <div className="container-">
                    <div className="main--box--01">
                        <div className="main--box--01--text col-6">
                            <h1>Explore os serviços que a We-A-Me oferece e descubra  o que você procura.</h1>
                            <p className="col-9">Com a We-A-Me é possivel encontrar e divulgar comercios e serviços autonomos em sua região com os melhores profissionais. </p>
                        </div>

                        <div className="main--img--01"><img src={img_box_01} alt="" /></div>
                    </div>



                    <div className="main--box--02">
                        <div className="main--img--02"><img src={img_box_02} alt="" /></div>

                        <div className="main--box--02--text col-6">
                            <h2>Conheça nossos benefícios e faça parte desta comunidade</h2>

                            <ul>
                                <li>Valores Predefinidos</li>
                                <li>Plataforma Gamificada e Rankeada</li>
                                <li>Sem surpresas no orçamento</li>
                                <li>Contrate e ofereça serviços em um só lugar</li>
                                <li>Oferece segurança na contratação de serviços</li>
                            </ul>
                        </div>

                    </div>


                    <div className="main--box--03">
                        <div className="main--box--03--title">
                            <h2>Categorias oferecidas</h2>
                        </div>
                        <div className="main--box--cards--01">
                            <div className="card">
                                <img src={img_Reformas} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Reformas e Reparos</p>
                                </div>
                            </div>

                            <div className="card">
                                <img src={img_Auto} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Auto</p>
                                </div>
                            </div>

                            <div className="card">
                                <img src={img_Moda} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Modas</p>
                                </div>
                            </div>
                        </div>

                        <div className="main--box--cards--01 pt-5">
                            <div className="card">
                                <img src={img_Programacao} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Programação</p>
                                </div>
                            </div>

                            <div className="card">
                                <img src={img_Limpeza} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Limpeza</p>
                                </div>
                            </div>

                            <div className="card">
                                <img src={img_Assistencia} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Assistência Técnica</p>
                                </div>
                            </div>
                        </div>
                    </div >


                    <div className="main--box--04">
                        <div className="main--box--04--title">
                            <h2>Profissionais qualificados</h2>
                        </div>

                        <div className="main--box--circle--01">
                            <div className="circle">
                                <div><img src={img_profissional_01} alt="" /></div>
                                <div className="circle--name">
                                    <h2>José Vieira Silva</h2>
                                </div>
                                <div className="circle--autonomo">
                                    <p>Jardineiro</p>
                                </div>
                            </div>

                            <div className="circle">
                                <div><img src={img_profissional_02} alt="" /></div>
                                <div className="circle--name">
                                    <h2>Antonio Bezerra</h2>
                                </div>
                                <div className="circle--autonomo">
                                    <p>Artesão</p>
                                </div>
                            </div>

                            <div className="circle">
                                <div><img src={img_profissional_03} alt="" /></div>
                                <div className="circle--name">
                                    <h2>Junior Gonçalves</h2>
                                </div>
                                <div className="circle--autonomo">
                                    <p>Cabeleleiro</p>
                                </div>
                            </div>

                            <div className="circle">
                                <div><img src={img_profissional_04} alt="" /></div>
                                <div className="circle--name">
                                    <h2>Maria das Graças</h2>
                                </div>
                                <div className="circle--autonomo">
                                    <p>Costureira</p>
                                </div>
                            </div>
                        </div>


                        <div className="main--box--circle--01">
                            <div className="circle">
                                <div><img src={img_comercio_01} alt="" /></div>
                                <div className="circle--name">
                                    <h2>Circo´s Store</h2>
                                </div>
                                <div className="circle--autonomo">
                                    <p>Comércio</p>
                                </div>
                            </div>

                            <div className="circle">
                                <div><img src={img_comercio_02} alt="" /></div>
                                <div className="circle--name">
                                    <h2>Deli Mark</h2>
                                </div>
                                <div className="circle--autonomo">
                                    <p>Barbearia</p>
                                </div>
                            </div>

                            <div className="circle">
                                <div><img src={img_comercio_03} alt="" /></div>
                                <div className="circle--name">
                                    <h2>Tony´ps</h2>
                                </div>
                                <div className="circle--autonomo">
                                    <p>Pizzaria</p>
                                </div>
                            </div>

                            <div className="circle">
                                <div><img src={img_comercio_04} alt="" /></div>
                                <div className="circle--name">
                                    <h2>Betty´s Burguers</h2>
                                </div>
                                <div className="circle--autonomo">
                                    <p>Lanchonete</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
}