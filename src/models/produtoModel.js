const db = require("../config/banco-de-dados");

function adicionarNoEstoque(titulo, local, quantidade) {

  db.query(`
    INSERT INTO estoque (produto, fornecedor, quantidade, criadoEm) 
    VALUES ('${titulo}', '${local}', '${quantidade}', NOW())
    `)
    .then(() => {
      console.log("Estoque adicionado com sucesso!");
    })
    .catch((erro) => {
      console.error("Erro ao adicionar o estoque:", erro);
    });
}

async function listandoEstoque() {

  console.log("Listando o estoque...");
  const estoques = await db.query(`
    SELECT * FROM estoque
    `);
  
  return estoques[0];
  
}


module.exports = {
  adicionarNoEstoque,
  listandoEstoque
}