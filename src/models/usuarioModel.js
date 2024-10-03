const db = require("../config/banco-de-dados");
const md5 = require("md5");

function adicionarUsuario(nome, email, senha) {


  // Adicionando o usuário
  db.query(`
    INSERT INTO usuarios (nome, email, senha, criadoEm) 
    VALUES ('${nome}', '${email}', '${md5(senha)}', NOW())
    `)
    .then(()=> {
      console.log("Usuario adicionado com sucesso!");
    })
    .catch((erro)=>{
      console.error("Erro ao adicionar o usuário:", erro);
    })
}

async function buscandoUsuario(email){

  const usuario = await db.query(`
    SELECT * FROM usuarios WHERE email = '${email}'
  `);

  return usuario[0][0];
}

module.exports = {
  adicionarUsuario,
  buscandoUsuario
}