var express = require("express");
var router = express.Router();
var usuarioController = require("../controllers/usuarioController");

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/cadastrarMusico", function (req, res) {
    usuarioController.cadastrarMusico(req, res);
})

// Ajuste a rota para "/dados-dashboard"
router.get("/dados-dashboard", function (req, res) {
    usuarioController.buscarConjuntosVotados(req, res);
});

module.exports = router;
