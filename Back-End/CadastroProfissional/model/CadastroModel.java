package com.br.WeAMe.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="profissional")

public class CadastroModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_profissional")
	private Integer id_profissional;
	
	@Column(name = "nome_empresa", length = 200, nullable = true)
	private String nome_empresa;
	
	@Column(name = "cpf", length = 11, nullable = true)
	private String cpf;
	
	@Column(name = "cnpj", length = 14, nullable = true)
	private String cnpj;
	
	@Column(name = "email", length = 100, nullable = true)
	private String email;
	
	@Column(name = "telefone", length = 15, nullable = true)
	private String telefone;
	
	@Column(name = "senha", columnDefinition = "TEXT", nullable = true)
	private String senha;
	
	@Column(name = "foto_profissional", columnDefinition = "BLOB", nullable = true)
	private String foto_profissional;
	
	@Column(name = "formacao_profissional", columnDefinition = "LONGTEXT", nullable = true)
	private String formacao_profissional;
	
	@Column(name = "biografia", columnDefinition = "LONGTEXT", nullable = true)
	private String biografia;
	
	@OneToOne
	@JoinColumn (name="endereco_id_endereco", nullable = false ,unique = true)
	private EnderecoModel endereco_id_endereco;

	public Integer getId() {
		return id_profissional;
	}

	public void setId(Integer id) {
		this.id_profissional = id;
	}

	public String getNome_empresa() {
		return nome_empresa;
	}

	public void setNome_empresa(String nome_empresa) {
		this.nome_empresa = nome_empresa;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getCnpj() {
		return cnpj;
	}

	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getFoto_profissional() {
		return foto_profissional;
	}

	public void setFoto_profissional(String foto_profissional) {
		this.foto_profissional = foto_profissional;
	}

	public String getFormacao_profissional() {
		return formacao_profissional;
	}

	public void setFormacao_profissional(String formacao_profissional) {
		this.formacao_profissional = formacao_profissional;
	}

	public String getBiografia() {
		return biografia;
	}

	public void setBiografia(String biografia) {
		this.biografia = biografia;
	}
	
}

	