-- Crea la base de datos
USE master
GO
CREATE DATABASE DBDocente
GO

-- Crea la tabla de docentes
USE DBDocente
GO
CREATE TABLE docente (
  identificacion int NOT NULL,
  tipo_identificacion varchar(3) NOT NULL,
  nombres varchar(50) NOT NULL,
  apellidos varchar(50) NOT NULL,
  correo_electronico varchar(150) NOT NULL,
  telefono_celular varchar(14) NOT NULL,
  numero_contrato varchar(20) NOT NULL,
  ciudad_residencia varchar(50),
  escalafon_tecnico varchar(50) NOT NULL,
  escalafon_extension varchar(50) NOT NULL
)
GO

-- Crea la tabla de logins
USE DBDocente
GO
CREATE TABLE logins (
  id int IDENTITY(1,1),
  usuario varchar(25) NOT NULL,
  contraseña varchar(50) NOT NULL,
  token varchar,
  role varchar(30)
)
GO

USE DBDocente
GO
ALTER TABLE docente ADD CONSTRAINT PK_docentes PRIMARY KEY CLUSTERED (identificacion)
GO
ALTER TABLE logins ADD CONSTRAINT PK_login PRIMARY KEY CLUSTERED (id)


-- datos de prueba en la tabla "logins"
USE DBDocente;
INSERT INTO dbo.logins (usuario, contraseña,role) VALUES
('DDP', '4r5','admin'),
('Rot', '3322','admin');

-- Crea datos de prueba
USE DBDocente
GO
INSERT INTO dbo.docente (identificacion, tipo_identificacion, nombres, apellidos, correo_electronico, telefono_celular, numero_contrato, ciudad_residencia, escalafon_tecnico, escalafon_extension) VALUES
(10001, 'CC', 'Juan', 'Pérez', 'juan.perez@example.com', '3123456789', '1234567890', 'Bogotá', 'Técnico', 'Tecnico experiencia inferior 1 año'),
(10002, 'CE', 'María', 'González', 'maria.gonzalez@example.com', '3124567890', '9876543210', 'Cali', 'Tecnólogo', 'Profesional'),
(10003, 'CC', 'Laura', 'Gómez', 'laura.gomez@example.com', '3125678901', '2233445566', 'Medellín', 'Técnico', 'Técnico experiencia inferior 1 año'),
(10004, 'CE', 'Carlos', 'López', 'carlos.lopez@example.com', '3112345678', '1122334455', 'Bogotá', 'Tecnólogo', 'Tecnólogo'),
(10005, 'CC', 'Ana', 'Martínez', 'ana.martinez@example.com', '3109876543', '9988776655', 'Cali', 'Profesional', 'Tecnólogo'),
(10006, 'CC', 'Pedro', 'Ramírez', 'pedro.ramirez@example.com', '3145678901', '6677889900', 'Bucaramanga', 'Técnico', 'Técnico experiencia superior 1 año'),
(10007, 'CE', 'Sofía', 'Torres', 'sofia.torres@example.com', '3178901234', '3344556677', 'Barranquilla', 'Profesional', 'Profesional'),
(10008, 'CC', 'Diego', 'Hernández', 'diego.hernandez@example.com', '3198765432', '2233445566', 'Cartagena', 'Tecnólogo', 'Profesional'),
(10009, 'CC', 'Camila', 'Díaz', 'camila.diaz@example.com', '3187654321', '9988776655', 'Cali', 'Profesional', 'Tecnólogo'),
(10010, 'CE', 'Andrés', 'Sánchez', 'andres.sanchez@example.com', '3112345678', '6677889900', 'Medellín', 'Técnico', 'Técnico experiencia superior 1 año'),
(10011, 'CC', 'Valentina', 'Pérez', 'valentina.perez@example.com', '3123456789', '1122334455', 'Bogotá', 'Técnico', 'Técnico experiencia inferior 1 año'),
(10012, 'CE', 'Eduardo', 'López', 'eduardo.lopez@example.com', '3156789012', '2233445566', 'Bucaramanga', 'Técnico', 'Tecnólogo'),
(10013, 'CC', 'Isabella', 'Martínez', 'isabella.martinez@example.com', '3134567890', '9988776655', 'Cali', 'Tecnólogo', 'Profesional'),
(10014, 'CC', 'Mateo', 'Ramírez', 'mateo.ramirez@example.com', '3190123456', '6677889900', 'Medellín', 'Técnico', 'Técnico experiencia superior 1 año'),
(10015, 'CE', 'Luis', 'Torres', 'luis.torres@example.com', '3112345678', '2233445566', 'Bogotá', 'Técnico', 'Técnico experiencia inferior 1 año'),
(10016, 'CC', 'Catalina', 'Hernández', 'catalina.hernandez@example.com', '3123456789', '1122334455', 'Bucaramanga', 'Profesional', 'Profesional'),
(10017, 'CE', 'Javier', 'Díaz', 'javier.diaz@example.com', '3145678901', '9988776655', 'Cali', 'Tecnólogo', 'Profesional'),
(10018, 'CC', 'Valeria', 'Sánchez', 'valeria.sanchez@example.com', '3178901234', '6677889900', 'Barranquilla', 'Técnico', 'Técnico experiencia inferior 1 año'),
(10019, 'CC', 'Gabriel', 'Gómez', 'gabriel.gomez@example.com', '3112345678', '2233445566', 'Medellín', 'Profesional', 'Profesional');




