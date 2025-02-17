CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    rol ENUM('ADMIN', 'OPERARIO') DEFAULT 'OPERARIO',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    descripcion TEXT NOT NULL,
    cantidad INT NOT NULL,
    fecha_entrega DATE NOT NULL,
    estado ENUM('PENDIENTE', 'EN_PROCESO', 'REALIZADO', 'ENTREGADO') DEFAULT 'PENDIENTE',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

INSERT INTO usuarios (nombre, email, password, rol) VALUES
('Admin', 'admin@example.com', 'hashed_password_admin', 'ADMIN'),
('Operario 1', 'operario1@example.com', 'hashed_password_operario1', 'OPERARIO'),
('Operario 2', 'operario2@example.com', 'hashed_password_operario2', 'OPERARIO');

INSERT INTO pedidos (descripcion, cantidad, fecha_entrega, estado, usuario_id) VALUES
('100 Camisas Blancas', 100, '2024-02-15', 'PENDIENTE', 2),
('50 Pantalones Negros', 50, '2024-02-16', 'EN_PROCESO', 2),
('200 Uniformes Escolares', 200, '2024-02-18', 'REALIZADO', 3),
('80 Batas de Laboratorio', 80, '2024-02-20', 'ENTREGADO', 3);
