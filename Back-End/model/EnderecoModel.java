package com.br.WeAMe.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "endereco")

public class EnderecoModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	@Column(name = "id_endereco")
	private Integer id;

	@Column(name = "cep", nullable = true)
	private Integer cep;

	@Column(name = "estado", length = 50, nullable = true)
	private String estado;

	@Column(name = "cidade", length = 70, nullable = true)
	private String cidade;

	@Column(name = "bairro", length = 70, nullable = true)
	private String bairro;

	@Column(name = "logradouro", length = 200, nullable = true)
	private String logradouro;

	@Column(name = "numero", length = 10, nullable = true)
	private String numero;

	@Column(name = "complemento", length = 200)
	private String complemento;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getCep() {
		return cep;
	}

	public void setCep(Integer cep) {
		this.cep = cep;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public String getLougradouro() {
		return logradouro;
	}

	public void setLougradouro(String logradouro) {
		this.logradouro = logradouro;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public String getComplemento() {
		return complemento;
	}

	public void setComplemento(String complemento) {
		this.complemento = complemento;
	}

}
