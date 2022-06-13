import './Index.css';
import Box1 from './img/img_box_01.svg'
import Box2 from './img/img_box_02.svg'

function Index() {

    return(

        <main>
        <div className="container-">
            <div className="main--box--01">
                <div className="main--box--01--text col-6">
                    <h1>Explore os serviços que a We-A-Me oferece e descubra  o que você procura.</h1>
                    <p className="col-9">Com a We-A-Me é possivel encontrar e divulgar comercios e serviços autonomos em sua região com os melhores profissionais. </p>
                </div>
       
                <div className="main--img--01"><img src={Box1} alt="" /></div>
            </div>
       
       
       
            <div className="main--box--02">
                <div className="main--img--02"><img src={Box2} alt="" /></div>
       
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
       
       
            <div className="main--box--04">
                <div className="main--box--04--title">
                    <h2>Profissionais qualificados</h2>
                </div>
       
                <div className="main--box--circle--01">
                    <div className="circle">
                        <div><img  alt="" /></div>
                        <div className="circle--name">
                            <h2>José Vieira Silva</h2>
                        </div>
                        <div className="circle--autonomo">
                            <p>Jardineiro</p>
                        </div>
                    </div>
       
                    <div className="circle">
                        <div><img  alt="" /></div>
                        <div className="circle--name">
                            <h2>Antonio Bezerra</h2>
                        </div>
                        <div className="circle--autonomo">
                            <p>Artesão</p>
                        </div>
                    </div>
       
                    <div className="circle">
                        <div><img  alt="" /></div>
                        <div className="circle--name">
                            <h2>Junior Gonçalves</h2>
                        </div>
                        <div className="circle--autonomo">
                            <p>Cabeleleiro</p>
                        </div>
                    </div>
       
                    <div className="circle">
                        <div><img alt="" /></div>
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
                        <div><img alt="" /></div>
                        <div className="circle--name">
                            <h2>Circo´s Store</h2>
                        </div>
                        <div className="circle--autonomo">
                            <p>Comércio</p>
                        </div>
                    </div>
       
                    <div className="circle">
                        <div><img  alt="" /></div>
                        <div className="circle--name">
                            <h2>Deli Mark</h2>
                        </div>
                        <div className="circle--autonomo">
                            <p>Barbearia</p>
                        </div>
                    </div>
       
                    <div className="circle">
                        <div><img  alt="" /></div>
                        <div className="circle--name">
                            <h2>Tony´ps</h2>
                        </div>
                        <div className="circle--autonomo">
                            <p>Pizzaria</p>
                        </div>
                    </div>
       
                    <div className="circle">
                        <div><img alt="" /></div>
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
   
);   
}

export default Index;