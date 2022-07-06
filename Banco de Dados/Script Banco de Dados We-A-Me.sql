-- MySQL Script generated by MySQL Workbench
-- Sun Jul  3 18:36:08 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema bd_we-a-me
-- -----------------------------------------------------
-- Modelagem do banco de dados da We-A-Me, e construção das tabelas com seus atributos de determinado seus tipos de dados para auxiliar a criação.

-- -----------------------------------------------------
-- Schema bd_we-a-me
--
-- Modelagem do banco de dados da We-A-Me, e construção das tabelas com seus atributos de determinado seus tipos de dados para auxiliar a criação.
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bd_we-a-me` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin ;
USE `bd_we-a-me` ;

-- -----------------------------------------------------
-- Table `bd_we-a-me`.`Cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_we-a-me`.`Cliente` (
  `id_cliente` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `cpf` INT(11) NOT NULL,
  `email` VARCHAR(45) NULL,
  `telefone` VARCHAR(45) NULL,
  `senha` VARCHAR(45) NULL,
  PRIMARY KEY (`id_cliente`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_we-a-me`.`Endereco`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_we-a-me`.`Endereco` (
  `id_endereco` INT NOT NULL AUTO_INCREMENT,
  `cep` INT NOT NULL,
  `estado` VARCHAR(50) NOT NULL,
  `cidade` VARCHAR(70) NOT NULL,
  `bairro` VARCHAR(70) NOT NULL,
  `logradouro` VARCHAR(200) NOT NULL,
  `numero` VARCHAR(10) NOT NULL,
  `complemento` VARCHAR(200) NULL,
  PRIMARY KEY (`id_endereco`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_we-a-me`.`Profissional`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_we-a-me`.`Profissional` (
  `id_profissional` INT NOT NULL AUTO_INCREMENT,
  `nome_empresa` VARCHAR(200) NULL,
  `cpf` VARCHAR(11) NOT NULL,
  `cnpj` VARCHAR(14) NULL,
  `email` VARCHAR(100) NOT NULL,
  `telefone` VARCHAR(15) NOT NULL,
  `senha` VARCHAR(20) NOT NULL,
  `foto_profissional` BLOB NULL,
  `formacao_profissional` LONGTEXT NULL,
  `biografia` LONGTEXT NULL,
  `Endereco_id_endereco` INT NOT NULL,
  PRIMARY KEY (`id_profissional`, `Endereco_id_endereco`),
  UNIQUE INDEX `cpf | cnpj_UNIQUE` (`cpf` ASC) VISIBLE,
  INDEX `fk_Profissionais_Endereco1_idx` (`Endereco_id_endereco` ASC) VISIBLE,
  CONSTRAINT `fk_Profissionais_Endereco1`
    FOREIGN KEY (`Endereco_id_endereco`)
    REFERENCES `bd_we-a-me`.`Endereco` (`id_endereco`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_we-a-me`.`Categoria_Profissional`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_we-a-me`.`Categoria_Profissional` (
  `id_categoria_profissional` INT NOT NULL AUTO_INCREMENT,
  `categoria` LONGTEXT NOT NULL,
  PRIMARY KEY (`id_categoria_profissional`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_we-a-me`.`Categoria_Servico`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_we-a-me`.`Categoria_Servico` (
  `id_categoria_servico` INT NOT NULL AUTO_INCREMENT,
  `categoria` LONGTEXT NOT NULL,
  PRIMARY KEY (`id_categoria_servico`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_we-a-me`.`Avaliacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_we-a-me`.`Avaliacao` (
  `id_avaliacao` INT NOT NULL AUTO_INCREMENT,
  `Cliente_id_cliente` INT NOT NULL,
  `Profissional_id_profissional` INT NOT NULL,
  `cliente_avaliacao` INT(5) NOT NULL,
  `avaliação_comentarios` LONGTEXT NULL,
  PRIMARY KEY (`id_avaliacao`, `Cliente_id_cliente`, `Profissional_id_profissional`),
  INDEX `fk_Avaliacoes_Cliente1_idx` (`Cliente_id_cliente` ASC) VISIBLE,
  INDEX `fk_Avaliacoes_Profissionais1_idx` (`Profissional_id_profissional` ASC) VISIBLE,
  CONSTRAINT `fk_Avaliacoes_Cliente1`
    FOREIGN KEY (`Cliente_id_cliente`)
    REFERENCES `bd_we-a-me`.`Cliente` (`id_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Avaliacoes_Profissionais1`
    FOREIGN KEY (`Profissional_id_profissional`)
    REFERENCES `bd_we-a-me`.`Profissional` (`id_profissional`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_we-a-me`.`Historico_Servico`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_we-a-me`.`Historico_Servico` (
  `id_historico_servico` INT NOT NULL AUTO_INCREMENT,
  `imagem_servico` BLOB NULL,
  `titulo_servico` LONGTEXT NULL,
  `data_servico` DATE NULL,
  `Cliente_id_cliente` INT NOT NULL,
  PRIMARY KEY (`id_historico_servico`, `Cliente_id_cliente`),
  INDEX `fk_Historico_Servicos_Cliente1_idx` (`Cliente_id_cliente` ASC) VISIBLE,
  CONSTRAINT `fk_Historico_Servicos_Cliente1`
    FOREIGN KEY (`Cliente_id_cliente`)
    REFERENCES `bd_we-a-me`.`Cliente` (`id_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_we-a-me`.`Rel_Profissional_Servicos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_we-a-me`.`Rel_Profissional_Servicos` (
  `id_rel` INT NOT NULL AUTO_INCREMENT,
  `Historico_Servicos_id_historico_servicos` INT NOT NULL,
  `Profissional_id_profissional` INT NOT NULL,
  PRIMARY KEY (`id_rel`, `Historico_Servicos_id_historico_servicos`, `Profissional_id_profissional`),
  INDEX `fk_Rel_Profissional_Servicos_Historico_Servicos1_idx` (`Historico_Servicos_id_historico_servicos` ASC) VISIBLE,
  INDEX `fk_Rel_Profissional_Servicos_Profissionais1_idx` (`Profissional_id_profissional` ASC) VISIBLE,
  CONSTRAINT `fk_Rel_Profissional_Servicos_Historico_Servicos1`
    FOREIGN KEY (`Historico_Servicos_id_historico_servicos`)
    REFERENCES `bd_we-a-me`.`Historico_Servico` (`id_historico_servico`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Rel_Profissional_Servicos_Profissionais1`
    FOREIGN KEY (`Profissional_id_profissional`)
    REFERENCES `bd_we-a-me`.`Profissional` (`id_profissional`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_we-a-me`.`Rel_ProfissionalXCategoria_Servico`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_we-a-me`.`Rel_ProfissionalXCategoria_Servico` (
  `Categoria_Empreendedor_id_categoria_profissional` INT NOT NULL,
  `Categoria_Servico_id_categoria_servico` INT NOT NULL,
  `Profissional_id_profissional` INT NOT NULL,
  PRIMARY KEY (`Categoria_Empreendedor_id_categoria_profissional`, `Categoria_Servico_id_categoria_servico`, `Profissional_id_profissional`),
  INDEX `fk_Rel_EmpreendedorXCategoria_Servico_Categoria_Servico1_idx` (`Categoria_Servico_id_categoria_servico` ASC) VISIBLE,
  INDEX `fk_Rel_EmpreendedorXCategoria_Servico_Profissionais1_idx` (`Profissional_id_profissional` ASC) VISIBLE,
  CONSTRAINT `fk_Rel_EmpreendedorXCategoria_Servico_Categoria_Empreendedor1`
    FOREIGN KEY (`Categoria_Empreendedor_id_categoria_profissional`)
    REFERENCES `bd_we-a-me`.`Categoria_Profissional` (`id_categoria_profissional`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Rel_EmpreendedorXCategoria_Servico_Categoria_Servico1`
    FOREIGN KEY (`Categoria_Servico_id_categoria_servico`)
    REFERENCES `bd_we-a-me`.`Categoria_Servico` (`id_categoria_servico`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Rel_EmpreendedorXCategoria_Servico_Profissionais1`
    FOREIGN KEY (`Profissional_id_profissional`)
    REFERENCES `bd_we-a-me`.`Profissional` (`id_profissional`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_we-a-me`.`Cliente_Endereco`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_we-a-me`.`Cliente_Endereco` (
  `id_cliente_endereco` INT NOT NULL AUTO_INCREMENT,
  `Endereco_id_endereco` INT NOT NULL,
  `Cliente_id_cliente` INT NOT NULL,
  PRIMARY KEY (`id_cliente_endereco`, `Endereco_id_endereco`, `Cliente_id_cliente`),
  INDEX `fk_Cliente_Endereco_Endereco1_idx` (`Endereco_id_endereco` ASC) VISIBLE,
  INDEX `fk_Cliente_Endereco_Cliente1_idx` (`Cliente_id_cliente` ASC) VISIBLE,
  CONSTRAINT `fk_Cliente_Endereco_Endereco1`
    FOREIGN KEY (`Endereco_id_endereco`)
    REFERENCES `bd_we-a-me`.`Endereco` (`id_endereco`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Cliente_Endereco_Cliente1`
    FOREIGN KEY (`Cliente_id_cliente`)
    REFERENCES `bd_we-a-me`.`Cliente` (`id_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
