var express = require("express");
var router = express.Router();

var roupasController = require("../controllers/roupasController");


router.post("/cadastrarRoupa", function (req, res) {
    roupasController.cadastrarRoupa(req, res);
})

module.exports = router;