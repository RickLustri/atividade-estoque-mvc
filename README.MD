## Sobre o projeto
O projeto consiste em um aplicativo para gerenciar estoque.

## Tecnologias
- [NodeJS](https://nodejs.org/pt)
- [Express](https://expressjs.com/pt-br/)
- [MySQL](https://www.mysql.com/)
- [Arquitetura MVC](https://www.devmedia.com.br/introducao-ao-padrao-mvc/29308)
- [EJS](https://ejs.co/)

## Criar banco e tabela do projeto
```sql
  use `estoque_produtos_mvc`;

  create table usuarios(
    id int primary key auto_increment,
    nome varchar(255),
    email varchar(255) unique,
    senha varchar(255),
    criadoEm date
  );

  create table estoque(
    id int primary key auto_increment,
    produto varchar(255),
    fornecedor varchar(255),
    quantidade varchar(255),
    criadoEm date
  );
```

## Como executar o projeto
```bash
## Clone o projeto usando 
git clone https://github.com/RickLustri/gerenciador-estoque-mvc.git

## Entre na pasta do projeto 
cd gerenciador-estoque-mvc

## Instale as dependências
npm install

## Inicie o projeto
npm start
```