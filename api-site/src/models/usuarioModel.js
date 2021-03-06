var database = require("../database/config")


 
function verificar(idUsuario, idNivel) {
    instrucaoSql = `
        select *, count(nivelConcluido) from pontos
        join usuario on fkusuario = idUsuario
        where fkusuario = ${idUsuario} and fkniveis = ${idNivel}
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pontuar(id, nivel, pontos, status, horario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pontuar()");
    var instrucao = `
        insert into pontos(fkusuario, fkniveis, pontos, nivelConcluido, horarioEntrada) values
        (${id} , ${nivel} , ${pontos}, '${status}', '${horario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = SHA2('${senha}',224);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



function cadastrar(nome,  naturalidade, dataNascimento, nickname, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    var instrucao = `
        INSERT INTO usuario (nomeUsuario, naturalidade, dataNascimento, nickname, email, senha) VALUES ('${nome}', '${naturalidade}' , '${dataNascimento}' , '${nickname}', '${email}', SHA2('${senha}', 224));

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function ranking(){
    instrucaoSql = `
    select sum(pontos) as sumPontos, nickname from usuario
    join pontos on fkusuario = idUsuario
    group by fkUsuario
    order by sumPontos desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    entrar,
    cadastrar,
    pontuar, 
    verificar,
    ranking
};

