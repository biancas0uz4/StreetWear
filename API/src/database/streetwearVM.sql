CREATE DATABASE streetwear;
USE streetwear;

CREATE TABLE usuario (
idUser int primary key auto_increment,
nome varchar(45),
sobrenome varchar(45),
telefone char(12),
email varchar(50),
senha varchar(50));

SELECT * FROM usuario;

CREATE TABLE roupa (
idRoupa int primary key auto_increment,
nome varchar(45));

SELECT * FROM roupa;

CREATE TABLE votacao (
idVotacao int auto_increment,
fkUser int,
fkRoupa int,
primary key (idVotacao, fkUser, fkRoupa),
foreign key (fkUser) 
references usuario(idUser),
foreign key (fkRoupa)
references roupa(idRoupa),
dataHora datetime);

SELECT * FROM votacao;
SELECT * FROM roupa;

INSERT INTO roupa(nome) VALUES
('Conjunto 1 Feminino'),
('Conjunto 2 Feminino'),
('Conjunto 3 Feminino'),
('Conjunto 4 Feminino'),
('Conjunto 5 Feminino'),
('Conjunto 1 Masculino'),
('Conjunto 2 Masculino'),
('Conjunto 3 Masculino'),
('Conjunto 4 Masculino'),
('Conjunto 5 Masculino');

SELECT usuario.nome as Usuário,
 usuario.email as Email, 
 roupa.nome as 'Conjunto Escolhido',
 votacao.dataHora as 'DataHora da Votação'
 FROM votacao JOIN usuario
 ON fkUser = idUser
 JOIN roupa 
 ON fkRoupa = idRoupa;
 
 -- SELECTS QUE VÃO PARA DASHBOARD
 SELECT 
 roupa.nome as 'Conjunto Escolhido',
 count(idVotacao) as 'Conjunto Vencedor'
 FROM votacao 
 JOIN roupa 
 ON fkRoupa = idRoupa
 group by  roupa.nome;
 
 -- TOTAL DE VOTOS 
 SELECT count(idVotacao) from votacao;
 
 -- TOTAL DE VOTOS CONJUNTOS FEMININOS
 SELECT count(idVotacao) from votacao
 join roupa 
 on fkRoupa = idRoupa
 where roupa.nome like '%Feminino%';
 
 -- TOTAL DE VOTOS CONJUNTOS MASCULINOS 
  SELECT count(idVotacao) from votacao
 join roupa 
 on fkRoupa = idRoupa
 where roupa.nome like '%Masculino%';
 
 -- TOTAL DE USUÁRIOS       KPI
 SELECT count(idUser) from usuario;
 select idUser from usuario;

 select count(u.nome) as qtd from usuario u left join votacao v on u.idUser = v.fkUser where u.idUser = 1;
 
 ---------------------------------------------------------------
 SELECT * FROM votacao JOIN usuario
 ON fkUser = idUser
 LEFT JOIN roupa 
 ON fkRoupa = idRoupa;

show tables;