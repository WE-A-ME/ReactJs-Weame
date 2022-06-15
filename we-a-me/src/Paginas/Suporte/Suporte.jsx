
import ImagemSuporte from './imagem.png'
import './Suporte.css'

export function Suporte() {
    return (
        
        <div>
            <div className="main--box--02">
                <div className="main--img--02"><img src={ImagemSuporte} alt="" id="imagemsuporte"/></div>
  
                <div className="main--box--02--text caixa col-5">
                    <div className="titulo5"><h2 >Algum problema ou dúvida?</h2></div> 
  
                    <div className="card mb-3 caixaazul">
                        <div className="card-body">
                        <p className="card-text">Entre em contato por e-mail ou telefone:</p>
                        <p className="card-text">E-mail: ajuda@weame.com.br</p>
                        <p className="card-text">Telefone: (11) 9 8589-5895</p>
                    </div>
                </div>
            </div>
  
        </div>
                  
          
      </div>

    );
  }