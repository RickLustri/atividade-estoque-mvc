const usuarioModel = require("../models/usuarioModel");
const md5 = require("md5");

function exibirPaginaLogin(request, response) {
  response.render('login');
}


async function autenticarUsuario(request, response) {

  console.log('Autenticando o usuário...');

  const { email, senha } = request.body;

  const usuario = await usuarioModel.buscandoUsuario(email);

  console.log("Recebendo o usuario");
  
  if (usuario == undefined) {
    console.log("Usuario não encontrado");
    response.render('login');
    return;
  }

  console.log("Verificando a senha");
  if (md5(senha) !== usuario.senha) {
    console.log("Senha inválida");
    response.render('login');
    return;
  }

  console.log("Autenticado com sucesso!");
  request.session.usuario = usuario;

  console.log('redirecionando para o estoque');
  response.redirect('/estoque');

}
  module.exports = {
    exibirPaginaLogin,
    autenticarUsuario
  }