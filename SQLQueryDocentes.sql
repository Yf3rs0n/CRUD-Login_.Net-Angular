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
  contrase�a varchar(50) NOT NULL,
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
INSERT INTO dbo.logins (usuario, contrase�a,role) VALUES
('DDP', '4r5','admin'),
('Rot', '3322','admin');

-- Crea datos de prueba
USE DBDocente
GO
INSERT INTO dbo.docente (identificacion, tipo_identificacion, nombres, apellidos, correo_electronico, telefono_celular, numero_contrato, ciudad_residencia, escalafon_tecnico, escalafon_extension) VALUES
(10001, 'CC', 'Juan', 'P�rez', 'juan.perez@example.com', '3123456789', '1234567890', 'Bogot�', 'T�cnico', 'Tecnico experiencia inferior 1 a�o'),
(10002, 'CE', 'Mar�a', 'Gonz�lez', 'maria.gonzalez@example.com', '3124567890', '9876543210', 'Cali', 'Tecn�logo', 'Profesional'),
(10003, 'CC', 'Laura', 'G�mez', 'laura.gomez@example.com', '3125678901', '2233445566', 'Medell�n', 'T�cnico', 'T�cnico experiencia inferior 1 a�o'),
(10004, 'CE', 'Carlos', 'L�pez', 'carlos.lopez@example.com', '3112345678', '1122334455', 'Bogot�', 'Tecn�logo', 'Tecn�logo'),
(10005, 'CC', 'Ana', 'Mart�nez', 'ana.martinez@example.com', '3109876543', '9988776655', 'Cali', 'Profesional', 'Tecn�logo'),
(10006, 'CC', 'Pedro', 'Ram�rez', 'pedro.ramirez@example.com', '3145678901', '6677889900', 'Bucaramanga', 'T�cnico', 'T�cnico experiencia superior 1 a�o'),
(10007, 'CE', 'Sof�a', 'Torres', 'sofia.torres@example.com', '3178901234', '3344556677', 'Barranquilla', 'Profesional', 'Profesional'),
(10008, 'CC', 'Diego', 'Hern�ndez', 'diego.hernandez@example.com', '3198765432', '2233445566', 'Cartagena', 'Tecn�logo', 'Profesional'),
(10009, 'CC', 'Camila', 'D�az', 'camila.diaz@example.com', '3187654321', '9988776655', 'Cali', 'Profesional', 'Tecn�logo'),
(10010, 'CE', 'Andr�s', 'S�nchez', 'andres.sanchez@example.com', '3112345678', '6677889900', 'Medell�n', 'T�cnico', 'T�cnico experiencia superior 1 a�o'),
(10011, 'CC', 'Valentina', 'P�rez', 'valentina.perez@example.com', '3123456789', '1122334455', 'Bogot�', 'T�cnico', 'T�cnico experiencia inferior 1 a�o'),
(10012, 'CE', 'Eduardo', 'L�pez', 'eduardo.lopez@example.com', '3156789012', '2233445566', 'Bucaramanga', 'T�cnico', 'Tecn�logo'),
(10013, 'CC', 'Isabella', 'Mart�nez', 'isabella.martinez@example.com', '3134567890', '9988776655', 'Cali', 'Tecn�logo', 'Profesional'),
(10014, 'CC', 'Mateo', 'Ram�rez', 'mateo.ramirez@example.com', '3190123456', '6677889900', 'Medell�n', 'T�cnico', 'T�cnico experiencia superior 1 a�o'),
(10015, 'CE', 'Luis', 'Torres', 'luis.torres@example.com', '3112345678', '2233445566', 'Bogot�', 'T�cnico', 'T�cnico experiencia inferior 1 a�o'),
(10016, 'CC', 'Catalina', 'Hern�ndez', 'catalina.hernandez@example.com', '3123456789', '1122334455', 'Bucaramanga', 'Profesional', 'Profesional'),
(10017, 'CE', 'Javier', 'D�az', 'javier.diaz@example.com', '3145678901', '9988776655', 'Cali', 'Tecn�logo', 'Profesional'),
(10018, 'CC', 'Valeria', 'S�nchez', 'valeria.sanchez@example.com', '3178901234', '6677889900', 'Barranquilla', 'T�cnico', 'T�cnico experiencia inferior 1 a�o'),
(10019, 'CC', 'Gabriel', 'G�mez', 'gabriel.gomez@example.com', '3112345678', '2233445566', 'Medell�n', 'Profesional', 'Profesional');




