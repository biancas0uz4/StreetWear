var roupasModel = require("../models/roupasModel");



function cadastrarRoupa(req, res) {
    
    var idUsuarioVar = req.body.idUsuarioVar;
    var conjuntoEscolhido = req.body.conjuntoEscolhido;
    

    roupasModel.votacao(idUsuarioVar, conjuntoEscolhido)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );

}





module.exports = {
    cadastrarRoupa
}