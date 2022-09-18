-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema wawy
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema wawy
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `wawy` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema wawy
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema wawy
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `wawy` DEFAULT CHARACTER SET utf8mb4 ;
USE `wawy` ;

-- -----------------------------------------------------
-- Table `wawy`.`emociones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wawy`.`emociones` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(20) NOT NULL,
  `color` VARCHAR(10) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `wawy`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wawy`.`usuarios` (
  `idusuario` INT(11) NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(200) NOT NULL,
  `contrasena` VARCHAR(200) NOT NULL,
  `activo` INT(11) NOT NULL,
  PRIMARY KEY (`idusuario`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `wawy`.`diarioEmociones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wawy`.`diarioEmociones` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATETIME NOT NULL,
  `idUsuario` INT(11) NOT NULL,
  `idEmocion` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) ,
  INDEX `fk_diarioEmociones_usuarios_idx` (`idUsuario` ASC) ,
  INDEX `fk_diarioEmociones_emociones1_idx` (`idEmocion` ASC) ,
  CONSTRAINT `fk_diarioEmociones_usuarios`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `wawy`.`usuarios` (`idusuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_diarioEmociones_emociones1`
    FOREIGN KEY (`idEmocion`)
    REFERENCES `wawy`.`emociones` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `wawy`.`categoriaNTDL`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wawy`.`categoriaNTDL` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) )
ENGINE = InnoDB;

USE `wawy` ;

-- -----------------------------------------------------
-- Table `wawy`.`respuestas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wawy`.`respuestas` (
  `idusuario` INT(11) NOT NULL,
  `pregunta` VARCHAR(500) NOT NULL,
  `respuesta` VARCHAR(500) NOT NULL,
  `fecha` DATETIME NOT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `wawy`.`NotToDoList`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wawy`.`NotToDoList` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `idUsuario` INT(11) NOT NULL,
  `idCategoria` INT NOT NULL,
  `contenido` VARCHAR(400) NOT NULL,
  PRIMARY KEY (`id`, `idUsuario`, `idCategoria`),
  INDEX `fk_usuarios_has_categoriasNotToDoList_categoriasNotToDoList_idx` (`idCategoria` ASC) ,
  INDEX `fk_usuarios_has_categoriasNotToDoList_usuarios_idx` (`idUsuario` ASC) ,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) ,
  CONSTRAINT `fk_usuarios_has_categoriasNotToDoList_usuarios`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `wawy`.`usuarios` (`idusuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuarios_has_categoriasNotToDoList_categoriasNotToDoList1`
    FOREIGN KEY (`idCategoria`)
    REFERENCES `wawy`.`categoriaNTDL` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;