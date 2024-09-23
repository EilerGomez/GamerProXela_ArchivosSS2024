--INGRESAR CON EL SUPERUSUARIO Y HACER LO SIGUIENTE:

--			CREAR LOS 4 USUARIOS DE LA APLICACION/CONEXION A PSQL
/*CREATE USER admingpx WITH PASSWORD 'user1';
CREATE USER inventariogpx WITH PASSWORD 'user2';
CREATE USER bodegagpx WITH PASSWORD 'user3';
CREATE USER cajerogpx WITH PASSWORD 'user4';*/

--				CREACION DE ESQUEMAS

/*
CREATE SCHEMA sucursales
    AUTHORIZATION admingpx;

CREATE SCHEMA usuarios
    AUTHORIZATION admingpx;

CREATE SCHEMA cajeros
    AUTHORIZATION cajerogpx;

CREATE SCHEMA productos
    AUTHORIZATION admingpx;

CREATE SCHEMA bodegas
    AUTHORIZATION bodegagpx;

CREATE SCHEMA clientes
    AUTHORIZATION admingpx;

CREATE SCHEMA tarjetas
    AUTHORIZATION admingpx;

*/


DROP DATABASE IF EXISTS gamerproxela;

CREATE DATABASE gamerproxela;
\c gamerproxela;


CREATE TABLE sucursales.sucursal(
	identificacion SERIAL NOT NULL,
	nombre CHARACTER VARYING(50) NOT NULL,
	direccion CHARACTER VARYING(80) NOT NULL,
	dinero_caja DOUBLE PRECISION NOT NULL,
	PRIMARY KEY(identificacion)
);

CREATE TABLE usuarios.usuarios(
	identificacion SERIAL NOT NULL,
	nombre CHARACTER VARYING(100) NOT NULL,
	pass CHARACTER VARYING(80) NOT NULL,
	rol INTEGER NOT NULL,
	sucursal INTEGER NOT NULL,
	activo BOOLEAN NOT NULL,
	PRIMARY KEY(identificacion),
	CONSTRAINT user_sucursal_fk FOREIGN KEY (sucursal)
	REFERENCES sucursales.sucursal(identificacion)
);

CREATE TABLE cajeros.cajas(
	codigo INTEGER NOT NULL,
	usuario INTEGER,
	sucursal INTEGER NOT NULL,
	PRIMARY KEY(codigo,sucursal),
	CONSTRAINT cajas_user_fk FOREIGN KEY(usuario)
	REFERENCES usuarios.usuarios(identificacion)
	ON DELETE CASCADE
	ON UPDATE CASCADE,
	CONSTRAINT cajas_sucursal_fk FOREIGN KEY(sucursal)
	REFERENCES sucursales.sucursal(identificacion)
	ON DELETE CASCADE
	ON UPDATE CASCADE
);

CREATE TABLE productos.productos(
	codigo SERIAL NOT NULL,
	nombre CHARACTER VARYING (80) NOT NULL,
	precio_unitario_venta DECIMAL NOT NULL,
	en_venta BOOLEAN NOT NULL,
	PRIMARY KEY(codigo)
);

CREATE TABLE bodegas.compra(
	codigo SERIAL NOT NULL,
	usuario INTEGER NOT NULL,
	sucursal INTEGER NOT NULL,
	fecha DATE NOT NULL,
	total_compra DECIMAL NOT NULL,
	PRIMARY KEY(codigo),
	CONSTRAINT compra_usuario_fk FOREIGN KEY (usuario)
	REFERENCES usuarios.usuarios(identificacion)
	ON DELETE CASCADE
	ON UPDATE CASCADE,
	CONSTRAINT compra_sucursal_fk FOREIGN KEY(sucursal)
	REFERENCES sucursales.sucursal(identificacion)
	ON DELETE CASCADE
	ON UPDATE CASCADE
);

CREATE TABLE bodegas.productos_compra(
	id_compra INTEGER NOT NULL,
	id_producto INTEGER NOT NULL,
	cantidad INTEGER NOT NULL,
	precio_unitario DECIMAL NOT NULL,
	subtotal DECIMAL,
	PRIMARY KEY(id_compra,id_producto),
	CONSTRAINT idcompra_productoscompas_fk FOREIGN KEY (id_compra)
	REFERENCES bodegas.compra(codigo)
	ON DELETE CASCADE
	ON UPDATE CASCADE,
	CONSTRAINT idproducto_productoscompras_fk FOREIGN KEY (id_producto)
	REFERENCES productos.productos(codigo)
	ON DELETE CASCADE
	ON UPDATE CASCADE
);

CREATE TABLE cajeros.clientes(
	identificacion SERIAL NOT NULL,
	nombre CHARACTER VARYING (80) NOT NULL,
	telefono BIGINT NOT NULL,
	nit CHARACTER VARYING (20),
	PRIMARY KEY(identificacion)
);

CREATE TABLE cajeros.ventas(
	codigo SERIAL NOT NULL,
	usuario INTEGER NOT NULL,
	sucursal INTEGER NOT NULL,
	caja INTEGER NOT NULL,
	cliente INTEGER NOT NULL,
	nit_cliente VARCHAR,
	total_sin_descuento DECIMAL,
	total_con_descuento DECIMAL,
	fecha DATE NOT NULL,
	puntos_descuento DECIMAL,
	PRIMARY KEY(codigo),
	CONSTRAINT usuario_venta_fk FOREIGN KEY (usuario)
	REFERENCES usuarios.usuarios(identificacion)
	ON DELETE CASCADE
	ON UPDATE CASCADE,
	CONSTRAINT sucursal_venta_fk FOREIGN KEY (sucursal)
	REFERENCES sucursal(identificacion)
	ON DELETE CASCADE
	ON UPDATE CASCADE,
	CONSTRAINT cliente_venta_fk FOREIGN KEY (cliente)
	REFERENCES clientes.clientes(identificacion)
	ON DELETE CASCADE
	ON UPDATE CASCADE
);

CREATE TABLE cajeros.productos_venta(
	id_venta INTEGER NOT NULL,
	id_producto INTEGER NOT NULL,
	cantidad INTEGER NOT NULL,
	precio_unitario DECIMAL NOT NULL,
	subtotal DECIMAL,
	PRIMARY KEY(id_venta,id_producto),
	CONSTRAINT id_venta_productosventa_fk FOREIGN KEY (id_venta)
	REFERENCES cajeros.ventas(codigo)
	ON DELETE CASCADE
	ON UPDATE CASCADE,
	CONSTRAINT producto_productos_ventas_fk FOREIGN KEY (id_producto)
	REFERENCES productos.productos(codigo)
	ON DELETE CASCADE
	ON UPDATE CASCADE
);

CREATE TABLE sucursales.productos_sucursal(
	id_producto INTEGER NOT NULL,
	id_sucursal INTEGER NOT NULL,
	cantidad_estanteria INTEGER NOT NULL,
	cantidad_bodega INTEGER NOT NULL,
	pasillo_bodega INTEGER,
	pasillo_estanteria INTEGER,
	PRIMARY KEY (id_sucursal,id_producto),
	CONSTRAINT idproducto_productossucursal_fk FOREIGN KEY (id_producto)
	REFERENCES productos.productos(codigo)
	ON DELETE CASCADE
	ON UPDATE CASCADE,
	CONSTRAINT idsucursal_productossucursal_fk FOREIGN KEY (id_sucursal)
	REFERENCES sucursales.sucursal(identificacion)
	ON DELETE CASCADE
	ON UPDATE CASCADE
);

CREATE TABLE tarjetas.tarjeta_descuento(
	codigo SERIAL NOT NULL,
	tipo CHAR(1) NOT NULL,
	cliente INTEGER NOT NULL,
	total_puntos DECIMAL NOT NULL,
	xgasto DECIMAL NOT NULL,
	puntosxgasto INTEGER NOT NULL,
	PRIMARY KEY(codigo,cliente),
	CONSTRAINT cliente_tarjeta_descuento_fk FOREIGN KEY (cliente)
	REFERENCES clientes.clientes(identificacion)
	ON DELETE CASCADE
	ON UPDATE CASCADE
);

CREATE TABLE tarjetas.solicitudes_tarjetas(
	codigo SERIAL NOT NULL,
	estado CHARACTER VARYING(20) NOT NULL,
	cliente INTEGER NOT NULL,
	motivo CHARACTER VARYING(22) NOT NULL,
	descripcion CHARACTER VARYING(150),
	PRIMARY KEY(codigo),
	CONSTRAINT cliente_solicitud_tarjeta_fk FOREIGN KEY(cliente)
	REFERENCES clientes.clientes(identificacion)
	ON DELETE CASCADE
	ON UPDATE CASCADE
);
CREATE TABLE clientes.solicitudes_modificacion_cliente(
	id SERIAL NOT NULL,
	usuario INTEGER NOT NULL,
	sucursal INTEGER NOT NULL,
	cliente INTEGER NOT NULL,
	descripcion CHARACTER VARYING(100),
	aprobacion BOOLEAN NOT NULL,
	edit BOOLEAN NOT NULL,
	PRIMARY KEY(id),
	CONSTRAINT cliente_solicitud_modificacion_fk FOREIGN KEY(cliente)
	REFERENCES clientes.clientes(identificacion)
	ON DELETE CASCADE
	ON UPDATE CASCADE,
	CONSTRAINT usuario_solicitud_modificacion_fk FOREIGN KEY (usuario)
	REFERENCES usuarios.usuarios(identificacion)
	ON DELETE CASCADE
	ON UPDATE CASCADE,
	CONSTRAINT sucursal_solicitud_modificacion_cliente_fk FOREIGN KEY(sucursal)
	REFERENCES sucursales.sucursal(identificacion)
	ON DELETE CASCADE
	ON UPDATE CASCADE

);


/*PERMISOS DE USUARIOS*/


--PARA EL ADMINISTRADOR
GRANT SELECT, INSERT, UPDATE, DELETE ON usuarios.usuarios TO admingpx;
GRANT SELECT, INSERT, UPDATE ON sucursales.sucursal TO admingpx;
GRANT USAGE, SELECT ON SEQUENCE usuarios.usuarios_identificacion_seq TO admingpx; --permiso para la secuencia de iteracion usuarios


--PARA EL DE BODEGAS
GRANT USAGE ON SCHEMA usuarios TO bodegagpx; --permiso de esquema
GRANT SELECT ON usuarios.usuarios TO bodegagpx; --permiso para la tabla

GRANT SELECT, INSERT ON productos.productos TO bodegagpx;
GRANT SELECT, INSERT, UPDATE, DELETE
ON bodegas.compra, bodegas.productos_compra, sucursales.productos_sucursal
TO bodegagpx;
GRANT USAGE, SELECT ON SEQUENCE bodegas.compra_codigo_seq TO bodegagpx; --permiso para la secuencia de iteracion usuarios


GRANT USAGE ON SCHEMA sucursales TO bodegagpx; --permiso de esquema
GRANT SELECT ON sucursales.sucursal TO bodegagpx;--permiso de tabla



