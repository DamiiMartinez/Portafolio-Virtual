const express = require('express');
const path = require('path');

const PORT = 3000;
const app = express();

// Middleware para procesar JSON y datos de formularios
app.use(express.json()); // Para datos en JSON
app.use(express.urlencoded({ extended: true })); // Para datos de formularios

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, "index.html")));

// 📌 **Iniciar Base de Datos y Servidor**
syncDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.error("❌ Error al iniciar:", error);
});