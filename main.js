const express = require('express');
const path = require('path');

const PORT = 3000;
const app = express();

// Middleware para procesar JSON y datos de formularios
app.use(express.json()); // Para datos en JSON
app.use(express.urlencoded({ extended: true })); // Para datos de formularios

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 📌 **Iniciar Base de Datos y Servidor**
app.listen(PORT, () => {
    console.log(`Servidor corriendo en PUERTO:${PORT}`);
});
