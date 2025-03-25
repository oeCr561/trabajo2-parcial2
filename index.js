// server js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

// Inicializar Express
const app = express();
const PORT = 3000;

// Middleware para procesar JSON
app.use(bodyParser.json());

// Conectar a la base de datos SQLite
const dbPath = './db/database.db'; // Ruta relativa a la base de datos
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err.message);
    } else {
        console.log('Conexión exitosa a la base de datos SQLite');
    }
});

// Endpoint GET: Obtener todos los videojuegos
app.get('/videojuegos', (req, res) => {
    const sql = 'SELECT * FROM videojuegos';
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// Endpoint POST: Agregar un nuevo videojuego
app.post('/videojuegos', (req, res) => {
    const { nombre, genero, precio, stock } = req.body;

    // Validar que se proporcionen todos los campos obligatorios
    if (!nombre || !genero || !precio || !stock) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const sql = `
        INSERT INTO videojuegos (nombre, genero, precio, stock)
        VALUES (?, ?, ?, ?)
    `;
    db.run(sql, [nombre, genero, precio, stock], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({
            id: this.lastID,
            nombre,
            genero,
            precio,
            stock
        });
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(Servidor escuchando en http://localhost:${PORT});
});