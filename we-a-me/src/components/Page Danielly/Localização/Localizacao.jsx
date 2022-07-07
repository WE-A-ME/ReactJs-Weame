import React from "react";
import "./Localizacao.css";
import Imagem from "./img/imagem.png"
import img_logo from "./img/logo.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export function Localizacao() {

  const cep = document.querySelector('.cep');
  const estado = document.querySelector('.estado');
  const cidade = document.querySelector('.cidade');
  const bairro = document.querySelector('.bairro');
  const logradouro = document.querySelector('.logradouro');
  const numero = document.querySelector('.numero');
  const complemento = document.querySelector('.complemento');

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

      .then((res)=> {
        if (res.status === 200) {
          setStatus({
            type: 'successo',
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
          navigate('/paginacliente');
        } else {
          console.log("ERRROOOOOOOOOOOOOOOOOOOOOO", res);

          setStatus({
            type: 'error',
            mensagem: "Erro: Localização não cadastrado!"
          });
        }
      })
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
            <input type="text" placeholder="CEP"  onChange={valueInput} value={user.cep} className="cep" />
            <input type="text" placeholder="Estado" onChange={valueInput} value={user.estado}  className="estado" />
            <input type="text" placeholder="Cidade"  onChange={valueInput} value={user.cidade} className="cidade" />
            <input type="text" placeholder="Bairro"  onChange={valueInput} value={user.bairro} className="bairro" />
            <input type="text" placeholder="Logradouro"  onChange={valueInput} value={user.logradouro} className="logradouro" />
            <input type="text" placeholder="Número"  onChange={valueInput} value={user.numero} className="numero" />
            <input type="text" placeholder="Complemento"  onChange={valueInput} value={user.complemento} className="complemento" />
            <button name="" className="btn botaolocalizacao" onClick={addUser}>Entrar</button>
          </div>

        </div>
      </main>
    </div>
  );
}