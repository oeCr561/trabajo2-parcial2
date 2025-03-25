CREATE DATABASE Stock_videojuegos;
USE Stock_videojuegos;
 
 
CREATE TABLE  Stock_videojuegos (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nombre TEXT NOT NULL,
    genero TEXT NOT NULL,
    precio REAL NOT NULL,
    stock INTEGER NOT NULL
    Oferta BOOLEAN DEFAULT FALSE,
    Ultima_venta DATE,
    fecha_lanzamiento DATE,
    idioma TEXT,
);
INSERT INTO Stock_videojuegos (
    nombre, genero, precio, stock, oferta, ultima_venta, fecha_lanzamiento, idioma) VALUES 
('The Legend of Zelda', 'Aventura', 59.99, 100, TRUE, '2023-10-01', '2023-01-01', 'Inglés, Español'),
('FIFA 23', 'Deportes', 49.99, 200, FALSE, NULL, '2022-09-30', 'Inglés, Francés, Alemán'),
('Cyberpunk 2077', 'Acción', 39.99, 150, TRUE, '2023-09-15', '2020-12-10', 'Inglés, Polaco');