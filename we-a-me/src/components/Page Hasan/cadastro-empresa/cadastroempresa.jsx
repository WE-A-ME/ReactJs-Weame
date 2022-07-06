import {React, useState} from "react";
import "./cadastroempresa.css";
import img_logo from "./img/logo.png";
import group from "./img/Group 47450.png";
import { Link } from "react-router-dom";

export function CadastroEmpresa(){

  const nome_empresa = document.querySelector('.button-nome_empresa');
  const cpf = document.querySelector('.button-cpf');
  const cnpj = document.querySelector('.button-cnpj');
  const email = document.querySelector('.button-email');
  const telefone = document.querySelector('.button-telefone');
  const senha = document.querySelector('.button-senha');



  const [user, setUser] = useState({
    nome_empresa: '',
    cpf: '',
    cnpj: '',
    email: '',
    telefone: '',
    senha: ''
  });

  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  });


  const valueInput = e => setUser({ ...user, [e.target.name]: e.target.value });


  const addUser = async e => {
    e.preventDefault();

    fetch("http://localhost:8080/profissional", // * Mudar Local da API ! */
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "Post",
        body: JSON.stringify({
          nome_empresa: nome_empresa.value,
          cpf: cpf.value,
          cnpj: cnpj.value,
          email: email.value,
          telefone: telefone.value,
          senha: senha.value
        })
      })

      // !Mensagem para Informar que esta correto !//

      .then(function (res) {
        console.log(res)
        console.log('Deu Certo ' + res.status)

        if (res.status) {
          setStatus({
            type: 'success',
            mensagem: "Usuário cadastrado com sucesso!"
          });
          setUser({
            nome_empresa: '',
            cpf: '',
            cnpj: '',
            email: '',
            telefone: '',
            senha: ''
          });
        } else {
          setStatus({
            type: 'error',
            mensagem: "Erro: Usuário não cadastrado com sucesso!"
          });
        }
      })
      .catch(function (res) { console.log(res) })
  }

    return (
        <div className="cadastroempresa">
            <main>
                <div> 
                  <Link to="/"><img className="logo" src={img_logo} alt=""/></Link>
                </div>
                <div className="conteudo">
                    <img src={group} alt="" className="imagem"/>
                    <div className="caixaazul">
                        <div className="titulocadastro"><h1>Seja um Parceiro</h1></div>
                        <div className="caixaparaform">
                            <input className="button-nome_empresa" name="nome_empresa" onChange={valueInput} value={user.nome_empresa} type="text" placeholder=" Nome Completo" />
                            <input className="button-cpf" name="cpf" onChange={valueInput} value={user.cpf} type="number" placeholder=" CPF " />
                            <input className="button-cnpj" name="cnpj" onChange={valueInput} value={user.cnpj} type="number" placeholder=" CNPJ " />
                            <input className="button-email" name="email" onChange={valueInput} value={user.email} type="email" placeholder=" Digite seu Email" />
                            <input className="button-telefone" name="telefone" onChange={valueInput} value={user.telefone} type="telefone" placeholder=" Digite seu Telefone" />
                            <input className="button-senha" name="senha" onChange={valueInput} value={user.senha} type="senha" placeholder=" Digite sua Senha" />
                        </div>
                            <button className="btn-cadastro" onClick={addUser}><Link to='/cadastroempresa-localizacao'>Cadastrar-se</Link></button>
                    </div>
                </div>
            </main>
        </div>
    );
}