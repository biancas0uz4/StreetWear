var express = require("express");
var router = express.Router();

var roupaController = require("../controllers/roupaController");

//Recebendo os dados do html e direcionando para a função cadastrar de roupaController.js
router.post("/cadastrar", function (req, res) {
    roupaController.cadastrar(req, res);
})