/*
 Path: /api/login
*/

const { router } = require("express");
const { login } = require("../controllers/auth.controller");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();
router.post(
    "/", [
        check("emai", "El email es obligatorio").isEmail(),
        check("password", "El password es obligatorio").not().isEmpty(),
        validarCampos,
    ],
    login
);
module.exports = router;