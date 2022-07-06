package com.br.WeAMe.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "cliente")
public class CadastroModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	@Column(name = "id_cliente")
	private Integer id;

	@Column(name = "nome", length = 200, nullable = true)
	private String nome;

	@Column(name = "cpf", length = 14, nullable = true)
	private String cpf;

	@Column(name = "email", length = 100, nullable = true)
	private String email;

	@Column(name = "tel", length = 11)
	private String tel;

	@Column(name = "senha", columnDefinition = "TEXT", nullable = true)
	private String senha;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelefone() {
		return tel;
	}

	public void setTelefone(String telefone) {
		this.tel = telefone;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

}
