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

import com.br.WeAMe.DAO.ICadastro;
import com.br.WeAMe.model.CadastroModel;

@CrossOrigin(origins = "http://localhost:3000/", maxAge = 3600)
@RestController
@RequestMapping ("/profissional")
public class CadastroControler  {
	
	@Autowired
	private ICadastro dao;
	
	@GetMapping 
	public List<CadastroModel> listaUsuarios () {
		return (List<CadastroModel>) dao.findAll();
	}

    @PostMapping
    public CadastroModel criarCadastro(@RequestBody CadastroModel profissional) {
        CadastroModel cadastroNovo = dao.save(profissional);
        return cadastroNovo;
    }


    @PutMapping
    public CadastroModel editarCadastro(@RequestBody CadastroModel profissional) {
        CadastroModel cadastroNovo = dao.save(profissional);
        return cadastroNovo;
    }


    @DeleteMapping("/{id}")
    public Optional<CadastroModel> excluirCadastro(@PathVariable Integer id) {
        Optional<CadastroModel> cadastro = dao.findById(id);
        dao.deleteById(id);
        return cadastro;
    }
}

