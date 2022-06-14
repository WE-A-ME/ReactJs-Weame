import './Index.css';
import Box1 from './img/img_box_01.svg'
import Box2 from './img/img_box_02.svg'

export function Index() {

    return(

        <main>
        <div className="container-">
            <div className="main--box--01">
                <div className="main--box--01--text col-4">
                    <h1>Explore os serviços que a We-A-Me oferece e descubra  o que você procura.</h1>
                    <p className="col-11">Com a We-A-Me é possivel encontrar e divulgar comercios e serviços autonomos em sua região com os melhores profissionais. </p>
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
                </div>
       
            </div>
       
       

        </div>
       
       </main>
   
);   
}