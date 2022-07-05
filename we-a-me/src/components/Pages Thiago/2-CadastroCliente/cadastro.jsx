import React from "react";
import cadastro from "./cadastro.css";
import Logo from './img/logo.png';
import logo_google from "./img/img-google.png";
import logo_linkedin from "./img/img-linkedin.png";
import img_cadastro from "./img/img-cadastro.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export function CadastroCliente() {

  const name = document.querySelector('.button-nome');
  const cpf = document.querySelector('.button-cpf');
  const email = document.querySelector('.button-email');
  const tel = document.querySelector('.button-tel');
  const password = document.querySelector('.button-senha');



  const [user, setUser] = useState({
    name: '',
    cpf: '',
    email: '',
    tel: '',
    password: ''
  });

  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  });


  const valueInput = e => setUser({ ...user, [e.target.name]: e.target.value });


  const addUser = async e => {
    e.preventDefault();

    fetch("http://localhost:8080/cadastros",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "Post",
        body: JSON.stringify({
          nome: name.value,
          cpf: cpf.value,
          email: email.value,
          tel: tel.value,
          senha: password.value
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
            name: '',
            cpf: '',
            email: '',
            tel: '',
            password: ''
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
    <div className="cadastropagina container-">
      <header>
        <Link to='/'><img className="header--logo" src={Logo} alt="" /></Link>
      </header>


      <div className="conteudo">
        <div >
          <img className="main--img" src={img_cadastro} alt="" />
        </div>

        <div className="main--cadastro">



          <div className="main--title col-12">
            <h2 id="h1">Cadastra-se. <br /> É rápido e fácil </h2>
          </div>
          {/*  */}
          <div className="main--inputs">
            <form className="formulario" action="">
              <input className="button-nome" name="name" onChange={valueInput} value={user.name} type="text" placeholder="Nome Completo" />
              <input className="button-cpf" name="cpf" onChange={valueInput} value={user.cpf} type="number" placeholder="CPF" pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})" />
              <input className="button-email" name="email" onChange={valueInput} value={user.email} type="text" placeholder="E-mail" />
              <input className="button-tel" name="tel" onChange={valueInput} value={user.tel} type="text" placeholder="Telefone" />
              <input className="button-senha" name="password" onChange={valueInput} value={user.password} type="password" placeholder="Senha" />
            </form>
            <button className="btn-entrar" onClick={addUser}>Cadastrar</button>
            <a href="/logincliente">Já tenho uma conta !</a>
            <button className="btn--login--google"><img className="img-btns" src={logo_google} alt="" /> Cadastrar com o Google</button>
            <button className="btn--login--linkedin"><img className="img-btns" src={logo_linkedin} alt="" /> Cadastrar com o Linkedin</button>
          </div>
        </div>
      </div>
    </div>
  );
}




