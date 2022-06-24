
import ImagemSuporte from './imagem.png'
import './Suporte.css'
import { Footer } from '../../Pages Componentes/Footer/footer'
import { NavBarIndex } from '../../Pages Componentes/NavBar Index/NavBarIndex'

export function Suporte() {
    return (
        
        <div>
            <NavBarIndex/>
            <div className="main--box--02">
                <div className="main--img--02 flex"><img src={ImagemSuporte} alt="A imagem é um desenho de uma mulher atendendo alguém no telefone" id="imagemsuporte"/></div>
  
                <div className="main--box--02--text caixa col-5">
                    <div className="titulo5"><h2 >Algum problema ou dúvida?</h2></div> 
                    <p className="card-text textosuporte">Se você tiver algum problema com o nosso site acesse aos nossos contatos para resolvemos.</p>
  
                    <div className="card mb-3 caixaazul">
                        <div className="card-body linhas">
                        <p className="card-text">Entre em contato por e-mail ou telefone:</p>
                        <p className="card-text">E-mail: ajuda@weame.com.br</p>
                        <p className="card-text">Telefone: (11) 9 8589-5895</p>
                    </div>
                </div>
            </div>
  
        </div>
                  
        <Footer/>  
      </div>

    );
  }