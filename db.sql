CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    rol ENUM('tecnico', 'usuario') NOT NULL DEFAULT 'usuario'
);

CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_cliente VARCHAR(100) NOT NULL,
    apellido_cliente VARCHAR(100) NOT NULL,
    usuario_id INT NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    precioTotal DECIMAL(10,2) NOT NULL,
    estado ENUM('PENDIENTE', 'EN_PROCESO', 'REALIZADO', 'ENTREGADO') DEFAULT 'PENDIENTE',
    descripcion TEXT,
    fecha_entrega DATE NOT NULL,
    fecha_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

CREATE TABLE prendas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    talla ENUM('8', '10', '12', '14', '16', 'S', 'M', 'L', 'XL', 'XXL') NOT NULL,
    colegio ENUM('La Rosa', 'CCP', 'INEM') NOT NULL,
    comentario TEXT,
    precio DECIMAL(10,2) NOT NULL
);

CREATE TABLE pedido_prendas (
    pedido_id INT NOT NULL,
    prenda_id INT NOT NULL,
    cantidad INT NOT NULL DEFAULT 1,
    PRIMARY KEY (pedido_id, prenda_id),
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id) ON DELETE CASCADE,
    FOREIGN KEY (prenda_id) REFERENCES prendas(id) ON DELETE CASCADE
);


-- Agregar usuarios
INSERT INTO usuarios (nombre, apellido, email, password, rol) 
VALUES ('Juan', 'Pérez', 'juan@example.com', 'hashedpassword123', 'tecnico');

-- Agregar prendas
INSERT INTO prendas (nombre, talla, colegio, comentario, precio) 
VALUES 
('Camisa Blanca', 'M', 'CCP', 'Manga larga', 25.00),
('Pantalón Azul', 'L', 'INEM', 'Tela resistente', 30.00),
('Falda Azul', '10', 'La Rosa', 'Con pliegues', 28.50),
('Sudadera Negra', 'XL', 'CCP', 'Con cierre frontal', 35.75),
('Camiseta Deportiva', 'S', 'INEM', 'Dri-fit', 20.00),
('Chaqueta Escolar', 'XXL', 'La Rosa', 'Impermeable', 50.00),
('Pantalón Gris', '14', 'CCP', 'Entallado', 32.25),
('Camiseta Azul', '16', 'INEM', 'Con logo bordado', 22.50),
('Polo Blanco', '8', 'La Rosa', 'Cuello mao', 18.99),
('Sudadera Verde', 'M', 'CCP', 'Con bolsillos', 40.00);


-- Agregar pedido
INSERT INTO pedidos (nombre_cliente, apellido_cliente, usuario_id, telefono, precioTotal, estado, descripcion, fecha_entrega) 
VALUES 
('Carlos', 'González', 1, '3201234567', 150.00, 'PENDIENTE', 'Pedido de uniformes de colegio', '2024-06-15'),
('María', 'Fernández', 1, '3109876543', 220.50, 'EN_PROCESO', 'Uniformes para secundaria', '2024-06-18'),
('Pedro', 'Martínez', 1, '3154567890', 180.75, 'REALIZADO', 'Pedido urgente de camisetas', '2024-06-20'),
('Laura', 'Ríos', 1, '3001239876', 95.00, 'PENDIENTE', 'Pantalones deportivos', '2024-06-22'),
('José', 'López', 1, '3114567890', 300.00, 'ENTREGADO', 'Pedido de uniforme completo', '2024-06-25'),
('Ana', 'Ramírez', 1, '3227894561', 175.99, 'REALIZADO', 'Pedido de sudaderas y camisetas', '2024-06-27'),
('Miguel', 'Torres', 1, '3012345678', 200.00, 'EN_PROCESO', 'Pedido especial para evento escolar', '2024-06-30'),
('Lucía', 'Sánchez', 1, '3105678923', 50.00, 'PENDIENTE', 'Solo una camiseta', '2024-07-02'),
('Andrés', 'Hernández', 1, '3123456789', 120.75, 'ENTREGADO', 'Pedido de uniformes para grupo de danza', '2024-07-05'),
('Rosa', 'Delgado', 1, '3198765432', 250.50, 'REALIZADO', 'Compra de uniformes para toda la familia', '2024-07-07');


-- Asociar prendas al pedido
INSERT INTO pedido_prendas (pedido_id, prenda_id, cantidad) 
VALUES 
(1, 1, 2),
(1, 5, 1),
(2, 2, 3),
(2, 6, 2),
(3, 3, 1),
(3, 7, 1),
(4, 4, 2),
(4, 8, 3),
(5, 5, 4),
(5, 9, 2),
(6, 6, 1),
(6, 10, 1),
(7, 7, 2),
(7, 3, 2),
(8, 8, 1),
(8, 4, 2),
(9, 9, 3),
(9, 2, 1),
(10, 10, 2),
(10, 1, 1);


