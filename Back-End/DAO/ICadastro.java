package com.br.WeAMe.DAO;

import org.springframework.data.repository.CrudRepository;

import com.br.WeAMe.model.CadastroModel;

public interface ICadastro extends CrudRepository<CadastroModel, Integer> {

}
