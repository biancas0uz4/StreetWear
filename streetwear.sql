CREATE DATABASE streetwear;
USE streetwear;

CREATE TABLE usuario (
idUser int primary key auto_increment,
nome varchar(45),
sobrenome varchar(45),
telefone char(12),
email varchar(50),
senha varchar(50));

