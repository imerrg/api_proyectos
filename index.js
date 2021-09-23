const express = require("express"); //sintaxis de importacion en node.js

require("dotenv").config();

const { dbConection } = require("./config/database");

const cors = require("cors");

//crear servidor express
const app = express();

//configurar cors
app.use(cors());

//Estableciendo conexion a la base de datos
dbConection();
//console.log(process.env);

//rutas de la API proyectos
app.get("/", (req, res) => {
    res.status(400).json({
        ok: true,
        msg: "Bienvenidos a node",
    });
});

//codigo desplegar servidor
app.listen(process.env.PORT, () => {
    console.log("Servidor desplegado en el puerto :" + process.env.PORT);
});