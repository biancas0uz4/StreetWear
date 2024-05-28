    var database = require("../database/config")

    function autenticar(email, senha) {
        console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
        var instrucaoSql = `
            SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
        `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    // Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
    function cadastrar(nome, sobrenome, telefone, email, senha) {
        console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

        // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
        //  e na ordem de inserção dos dados.
        var instrucaoSql = `
            INSERT INTO usuario (nome, sobrenome, telefone, email, senha) VALUES ('${nome}','${sobrenome}','${telefone}' ,'${email}', '${senha}');
        `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    function cadastrarMusico(nome, sobrenome, telefone, email, senha) {
        console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

        // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
        //  e na ordem de inserção dos dados.
        var instrucaoSql = `
            INSERT INTO usuario (nome, sobrenome, telefone, email, senha) VALUES ('${nome}','${sobrenome}','${telefone}' ,'${email}', '${senha}');
        `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    function buscarConjuntosVotados() {
        // Definir a instrução SQL para selecionar os conjuntos de roupas mais votados
        var instrucaoSql = `
            SELECT 
                roupa.nome AS 'Conjunto Escolhido',
                COUNT(votacao.idVotacao) AS 'Conjunto Vencedor'
            FROM 
                votacao 
            JOIN 
                roupa ON votacao.fkRoupa = roupa.idRoupa
            GROUP BY 
                roupa.nome;
        `;

        // Log da instrução SQL (opcional)
        console.log("Executando a instrução SQL: \n" + instrucaoSql);

        // Executar a instrução SQL e retornar os resultados
        return database.executar(instrucaoSql);
    }


    module.exports = {
        autenticar,
        cadastrar,
        buscarConjuntosVotados
    };