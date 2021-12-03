var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.post("/pontuar", function (req, res) {
    usuarioController.pontuar(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.get("/ranking", function (req, res) {
    usuarioController.ranking(req, res);
});

router.post("/verificar", function (req, res) {
    usuarioController.verificar(req, res);
})

module.exports = router;