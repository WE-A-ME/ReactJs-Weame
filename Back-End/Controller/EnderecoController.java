package com.br.WeAMe.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.WeAMe.DAO.IEndereco;
import com.br.WeAMe.model.EnderecoModel;

@RestController
@CrossOrigin("*")
@RequestMapping("/enderecos")
public class EnderecoController {
	@Autowired
	private IEndereco dao;

	@GetMapping
	public List<EnderecoModel> listaEndereco() {
		return (List<EnderecoModel>) dao.findAll();
	}

	@PostMapping
	public EnderecoModel criarEndereco(@RequestBody EnderecoModel enderecos) {
		EnderecoModel enderecoNovo = dao.save(enderecos);
		return enderecoNovo;
	}

	@PutMapping
	public EnderecoModel editarCadastro(@RequestBody EnderecoModel enderecos) {
		EnderecoModel enderecoNovo = dao.save(enderecos);
		return enderecoNovo;
	}

	@DeleteMapping("/{id}")
	public Optional<EnderecoModel> excluirCadastro(@PathVariable Integer id) {
		Optional<EnderecoModel> endereco = dao.findById(id);
		dao.deleteById(id);
		return endereco;
	}
}
