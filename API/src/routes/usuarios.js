var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});


//Recebendo os dados do html e direcionando para a função cadastrar de roupaController.js
router.post("/cadastrarMusico", function (req, res) {
    usuarioController.cadastrarMusico(req, res);
})
module.exports = router;