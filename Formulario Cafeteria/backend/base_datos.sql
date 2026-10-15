-- Crear la base de datos y tabla para el formulario de cafetería.
CREATE DATABASE IF NOT EXISTS cafeteria
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE cafeteria;

CREATE TABLE IF NOT EXISTS pedidos (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  cliente VARCHAR(100) NOT NULL,
  correo VARCHAR(150) NOT NULL,
  producto VARCHAR(30) NOT NULL,
  cantidad INT UNSIGNED NOT NULL,
  tamanio ENUM('Chico', 'Mediano', 'Grande') NOT NULL,
  llevar ENUM('Si', 'No') NOT NULL DEFAULT 'No',
  observaciones TEXT NULL,
  fecha_registro DATETIME NOT NULL,
  PRIMARY KEY (id)
);
