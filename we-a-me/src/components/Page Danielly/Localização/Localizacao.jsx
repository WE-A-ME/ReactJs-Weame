import React from "react";
import "./Localizacao.css";
import { useState } from "react";
import Imagem from "./img/imagem.png"
import img_logo from "./img/logo.png";
import { Link, useNavigate } from "react-router-dom";

export function Localizacao() {

  const cep = document.querySelector('cep');
  const estado = document.querySelector('estado');
  const cidade = document.querySelector('cidade');
  const bairro = document.querySelector('bairro');
  const logradouro = document.querySelector('logradouro');
  const numero = document.querySelector('numero');
  const complemento = document.querySelector('complemento');

  const navigate=useNavigate();

  const [user, setUser] = useState({
    cep: '',
    estado: '',
    cidade: '',
    bairro: '',
    logradouro: '',
    numero: '',
    complemento: ''

  });

  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  });


  const valueInput = e => setUser({ ...user, [e.target.name]: e.target.value });


  const addUser = async e => {
    e.preventDefault();

    fetch("http://localhost:8080/enderecos",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "Post",
        body: JSON.stringify({
          cep: cep.value,
          estado: estado.value,
          cidade: cidade.value,
          bairro: bairro.value,
          logradouro: logradouro.value,
          numero: numero.value,
          complemento: complemento.value
        })
      })

      // !Mensagem para Informar que esta correto !//

      .then(function (res) {


        if (res.status) {
          setStatus({
            type: 'Successo',
            mensagem: "Localização cadastrada com sucesso!"
          });
          setUser({
            cep: '',
            estado: '',
            cidade: '',
            bairro: '',
            logradouro: '',
            numero: '',
            complemento: ''
          });
          navigate('/cadastroempresa-localizacao')
        } else {
          setStatus({
            type: 'error',
            mensagem: "Erro: Localização não cadastrado!"
          });
        }
      })
      .catch(function (res) { console.log(res) })
    console.log(status.type, status.mensagem);


  }

  return (
    <div>
      <main>
        <div>
          <Link to="/"><img className="logo" src={img_logo} alt="" /></Link>
        </div>
        <div className="conteudolocalizacao">
          <img src={Imagem} alt="" className="imagemlocalizacao" />
          <div className="localizacao">
            <div className="titulolocalizacao"><h2>Dados de Localização</h2></div>
            <input type="text" placeholder="CEP" name="cep" className="cep" />
            <input type="text" placeholder="Estado" name="estado" className="estado" />
            <input type="text" placeholder="Cidade" name="cidade" className="cidade" />
            <input type="text" placeholder="Bairro" name="bairro" className="bairro" />
            <input type="text" placeholder="Logradouro" name="logradouro" className="logradouro" />
            <input type="text" placeholder="Número" name="numero" className="numero" />
            <input type="text" placeholder="Complemento" name="complemento" className="complemento" />
            <button name="" className="btn botaolocalizacao">Entrar</button>
          </div>

        </div>
      </main>
    </div>
  );
}