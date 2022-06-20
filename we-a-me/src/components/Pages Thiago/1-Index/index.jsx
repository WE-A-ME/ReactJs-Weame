import './Index.css';
import Box1 from './img/img_box_01.svg';
import Box2 from './img/img_box_02.svg';
import Box3 from './img/img_box_03.svg';
import { NavBarIndex } from '../../Pages Componentes/NavBar Index/NavBarIndex';
import { Footer } from '../../Pages Componentes/Footer/footer';

export function Index() {

    return (

        <div>

            <NavBarIndex />

            <main>

                <div className="container-">
                    <div className="main--box--01">
                        <div className="main--box--01--text col-4">
                            <h1>Explore os serviços que a We-A-Me oferece e descubra  o que você procura.</h1>
                            <p className="col-11">Com a We-A-Me é possivel encontrar e divulgar comercios e serviços autonomos em sua região com os melhores profissionais. </p>
                            <button type="button">Ir para Categorias <i class="fa-solid fa-arrow-right-long"></i> </button>
                        </div>
                        <div className="main--img--01"><img src={Box1} alt="" /></div>
                    </div>
                    <div className="main--box--02">
                        <div className="main--img--02"><img src={Box2} alt="" /></div>
                        <div className="main--box--02--text col-5">
                            <h2>Conheça nossos benefícios e faça parte desta comunidade</h2>
                            <ul>
                                <li>Valores Predefinidos</li>
                                <li>Plataforma Gamificada e Rankeada</li>
                                <li>Sem surpresas no orçamento</li>
                                <li>Contrate e ofereça serviços em um só lugar</li>
                                <li>Oferece segurança na contratação de serviços</li>
                            </ul>
                            <button type="button">Quero Fazer Parte <i class="fa-solid fa-arrow-right-long"></i> </button>
                        </div>
                    </div>

                    <div className="main--box--03">
                        <div className="main--box--03--text col-5">
                            <h1>Você deseja se tornar um Profissional  ?</h1>
                            <p className="col-11">Se tornando um Profissional da We-A-Me é permitido fazer orçamentos e encontrar pedidos, receber encomendas, tudo isso dentro da plataforma,  conversas seguras e protegidas conforme as diretrizes da LGPD.</p>
                            <button type="button">Tornar um Profissional <i class="fa-solid fa-arrow-right-long"></i> </button>
                        </div>
                        <div className="main--img--03"><img src={Box3} alt="" /></div>
                    </div>

                    <div className="main--box--04">

                        <div className="card text-center col-3">
                            <div className="card-body">
                                <h5 className="card-title">Nossa Missão</h5>
                                <p className="card-text">Visibilidade aos autônomos e acessibilidade  a Microeempreendedores.</p>
                            </div>
                        </div>
                        <div className="card text-center col-3">
                            <div className="card-body">
                                <h5 className="card-title">Nossa Visão</h5>
                                <p className="card-text">Conectar os autónomos e as microempresas ao mercado local e a comunidade. </p>
                            </div>
                        </div>
                        <div className="card text-center col-3">
                            <div className="card-body">
                                <h5 className="card-title">Nossos Valores</h5>
                                <p className="card-text">Confiança. <br /> Transparência. <br /> Segurança. </p>
                            </div>
                        </div>

                    </div>

                </div>

            </main>
            <Footer />
        </div>

    );
}