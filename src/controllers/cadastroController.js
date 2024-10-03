const usuarioModel = require("../models/usuarioModel");

// Responsável por renderizar a página de cadastro de usuários
function exibirPaginaCadastro(request, response) {
  response.render('cadastro');
}

function criarConta(request, response) {
  const { nome, email, senha } = request.body;

  usuarioModel.adicionarUsuario(nome, email, senha);
  response.redirect('/');
}


module.exports = {
  exibirPaginaCadastro,
  criarConta
}