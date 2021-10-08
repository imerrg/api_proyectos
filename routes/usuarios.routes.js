/*
    Ruta: /api/usuarios
*/

const { Router } = require("express");
const { chek, check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const {
    getUsuarios,
    crearUsuario,
    actualizarUsuario,
    elimianrUsuario,
} = require("../controllers/usuarios.controller");
const { validarJWT } = require("../middlewares/validar-jwt");
const router = Router();

router.get("/", validarJWT, getUsuarios);
router.post(
    "/", [
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("password", "El password es obligatorio").not().isEmpty(),
        check("email", "El email es obligatorio").not().isEmpty(),
        validarCampos,
    ],
    crearUsuario
);
router.put(
    "/:id", [
        validarJWT,
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("email", "El email es obligatorio").not().isEmpty(),
        validarCampos,
    ],
    actualizarUsuario
);

router.delete("/:id", validarJWT, elimianrUsuario);

module.exports = router;