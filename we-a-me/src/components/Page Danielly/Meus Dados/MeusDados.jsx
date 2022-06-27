import NavBar from "../../Pages Componentes/NavBar Input/navbar";
import { Footer } from "../../Pages Componentes/Footer/footer";
import { NavbarCategoriasLogin } from "../../Pages Componentes/Navbar Categorias copy/NavbarCategoriasLogin";
import Imagem from './imagemprofissional.jpg'
import './MeusDados.css'

export function MeusDados() {
    return(
        <div>
            <NavBar/>
            <NavbarCategoriasLogin/>
        <main className="main ppp">

        <div className="container">
            <div className="row justify-content-md-center align-items-center">

                <div className="col-md-2">
                    <div className="card align-items-center" id="cartaocliente">
                        <img src={Imagem} className="card-img-top" alt="Foto do Jorge dos Santos que trabalha na área de Reformas e Reparo" title="Jailson Costa" id="imagemcliente" />
                        <div className="card-body align-items-center nomecliente" id="texto">
                            <h5 className="card-title" id="nomecliente">Jailson Costa</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row justify-content-md-center align-items-center">
                <div className="informacoes align-items-center">
                    <button type="button" className="btn btn-outline-dark">Nome: Jailson</button>
                    <button type="button" className="btn btn-outline-dark email">Sobrenome: Costa</button>
                    <button type="button" className="btn btn-outline-dark email">Endereço de email: jorgintreino@jorgin.com</button>
                </div>
                <div className="nascimento align-items-center">
                    <button type="button" className="btn btn-outline-dark">Data de nascimento: 21/04/1980</button>
                </div>
                
                <div className="informacoes nascimento align-items-center">
                    <button type="button" className="btn btn-outline-dark">CEP: 00000-000</button>
                    <button type="button" className="btn btn-outline-dark email">Endereço: Rua Tanto Faz </button>
                    <button type="button" className="btn btn-outline-dark email">Número: 24</button>
                </div>

                <div className="informacoes nascimento align-items-center">
                    <button type="button" className="btn btn-outline-dark">Bairro: We-a-Me</button>
                    <button type="button" className="btn btn-outline-dark email">Estado: SP </button>
                    <button type="button" className="btn btn-outline-dark email">CIdade: Osasco</button>
                </div>

                <div className="informacoes nascimento align-items-center ">
                    <button type="button" className="btn btn editar">Editar</button>
                </div>
            </div>
        </div>

      

    </main>
    <Footer/>
    </div>
    );
}