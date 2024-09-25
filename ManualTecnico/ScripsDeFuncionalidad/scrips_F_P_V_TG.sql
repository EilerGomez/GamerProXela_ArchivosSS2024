insert into sucursales.sucursal(nombre,direccion) values ('Sucursal Parque', 'las lomas1');
insert into sucursales.sucursal(nombre,direccion) values ('Sucursal Centro1', 'las lomas1');
insert into sucursales.sucursal(nombre,direccion) values ('Sucursal Centro2', 'las lomas1');
insert into cajeros.compra(usuario,sucursal,fecha,total_compra) values (1,1,CURRENT_DATE,0);
select * from sucursal;
select * from usuarios;
select * from compra;

select * from compra;


/*update usuarios set pass='1a1dc91c907325c69271ddf0c944bc72' where identificacion =1;
select * from usuarios;*/

--ingresando 6 usuarios

--              ADMINISTRADOR
insert into usuarios.usuarios(nombre, pass,rol,sucursal) values ('Eiler gomez','1a1dc91c907325c69271ddf0c944bc72', 1,1);--pass='pass'/admin

--              SUCURSAL 1
insert into usuarios.usuarios(nombre, pass,rol,sucursal) values ('Alberto Del Rio','c1572d05424d0ecb2a65ec6a82aeacbf', 3,1); --pass='pass2'/bodeguero
insert into usuarios.usuarios(nombre, pass,rol,sucursal) values ('Juan Morena','3afc79b597f88a72528e864cf81856d2', 2,1); --pass='pass3'/inventario
insert into usuarios.usuarios(nombre, pass,rol,sucursal) values ('Angel Correa','fc2921d9057ac44e549efaf0048b2512', 2,1); --pass='pass4'/inventario
insert into usuarios.usuarios(nombre, pass,rol,sucursal) values ('Nicolas Tagliafico','d35f6fa9a79434bcd17f8049714ebfcb', 2,1); --pass='pass5'/inventario
insert into usuarios.usuarios(nombre, pass,rol,sucursal) values ('Antonieta Diaz','e9568c9ea43ab05188410a7cf85f9f5e', 2,1); --pass='pass6'/inventario
insert into usuarios.usuarios(nombre, pass,rol,sucursal) values ('Mario Kemppes','8c96c3884a827355aed2c0f744594a52', 4,1); --pass='pass7'/cajero
insert into usuarios.usuarios(nombre, pass,rol,sucursal) values ('Raul Estrada','ccd3cd18225730c5edfc69f964b9d7b3', 4,1); --pass='pass8'/cajero
insert into usuarios.usuarios(nombre, pass,rol,sucursal) values ('Wendy Cabrera','c28cce9cbd2daf76f10eb54478bb0454', 4,1); --pass='pass9'/cajero
insert into usuarios.usuarios(nombre, pass,rol,sucursal) values ('Luisa Nayara','a3224611fd03510682690769d0195d66', 4,1); --pass='pass10'/cajero
insert into usuarios.usuarios(nombre, pass,rol,sucursal) values ('Elvis Santos','0102812fbd5f73aa18aa0bae2cd8f79f', 4,1); --pass='pass11'/cajero
insert into usuarios.usuarios(nombre, pass,rol,sucursal) values ('Antony Cano','0bd0fe6372c64e09c4ae81e056a9dbda', 4,1); --pass='pass12'/cajero




--              SUCURSAL 2
insert into usuarios.usuarios(nombre, pass,rol,sucursal) values ('Thiago Alcantara','c868bff94e54b8eddbdbce22159c0299', 3,2); --pass='pass13'/bodeguero
insert into usuarios.usuarios(nombre, pass,rol,sucursal) values ('Ancelma Gonzales','d1f38b569c772ebb8fa464e1a90c5a00', 2,2); --pass='pass14'/inventario
insert into usuarios.usuarios(nombre, pass,rol,sucursal) values ('Pablo Gaviria','b279786ec5a7ed00dbe4d3fe1516c121', 2,2); --pass='pass15'/inventario
insert into usuarios.usuarios(nombre, pass,rol,sucursal) values ('Pedro Gonzales','66c99bf933f5e6bf3bf2052d66577ca8', 2,2); --pass='pass16'/inventario
insert into usuarios.usuarios(nombre, pass,rol,sucursal) values ('Ronald Araujo','6c2a5c9ead1d7d6ba86c8764d5cad395', 2,2); --pass='pass17'/inventario
insert into usuarios.usuarios(nombre, pass,rol,sucursal) values ('Marcus Andrade','64152ab7368fc7ca6b3ef6b71e330b86', 4,2); --pass='pass18'/cajero
insert into usuarios.usuarios(nombre, pass,rol,sucursal) values ('Rafael Monte Negro','1f61b744f2c9e8f49ae4c4965f39963f', 4,2); --pass='pass19'/cajero
insert into usuarios.usuarios(nombre, pass,rol,sucursal) values ('Zaul Lopez','90bfa11df19a9b9d429ccfa6997104df', 4,2); --pass='pass20'/cajero
insert into usuarios.usuarios(nombre, pass,rol,sucursal) values ('Christian Velasquez','5cddd1f7857fd4ab8095f676fcf88835', 4,2); --pass='pass21'/cajero
insert into usuarios.usuarios(nombre, pass,rol,sucursal) values ('Emma Gracia','b9974191c2e2806abb0ed0fe229ca0f6', 4,2); --pass='pass22'/cajero
insert into usuarios.usuarios(nombre, pass,rol,sucursal) values ('Sondra Martinez','b9b09ad3b376b828898d171e1cc2e05b', 4,2); --pass='pass23'/cajero



--              SUCURSAL 3
insert into usuarios.usuarios(nombre, pass,rol,sucursal) values ('Alberto Del Rio','87de23031d30a01efbb97ab885de862b', 3,3); --pass='pass24'/bodeguero
insert into usuarios.usuarios(nombre, pass,rol,sucursal) values ('Juan Morena','41e4652a622b10077ff4c22717dc57fd', 2,3); --pass='pass25'/inventario
insert into usuarios.usuarios(nombre, pass,rol,sucursal) values ('Angel Correa','ea8852d0353318fdf7c0fa2769fe2c35', 2,3); --pass='pass26'/inventario
insert into usuarios.usuarios(nombre, pass,rol,sucursal) values ('Nicolas Tagliafico','713fdc6c473ce5e66a6276686a3c745f', 2,3); --pass='pass27'/inventario
insert into usuarios.usuarios(nombre, pass,rol,sucursal) values ('Antonieta Diaz','421b66e92350b35dc2e8c67948b1eb74', 2,3); --pass='pass28'/inventario
insert into usuarios.usuarios(nombre, pass,rol,sucursal) values ('Marcus Andrade','6cf1cd514774dd611a9a07ff764f3324', 4,3); --pass='pass29'/cajero
insert into usuarios.usuarios(nombre, pass,rol,sucursal) values ('Rafael Monte Negro','60d589174ca2b89351a41d90a8c9c2cf', 4,3); --pass='pass30'/cajero
insert into usuarios.usuarios(nombre, pass,rol,sucursal) values ('Zaul Lopez','d111fad6810cfa1a59069cebd3ad85c4', 4,3); --pass='pass31'/cajero
insert into usuarios.usuarios(nombre, pass,rol,sucursal) values ('Christian Velasquez','a0ec99b64a6cb5129ec685b0c49cca44', 4,3); --pass='pass32'/cajero
insert into usuarios.usuarios(nombre, pass,rol,sucursal) values ('Emma Gracia','7a33c0fc3823abdb9ec8b761d8268c33', 4,3); --pass='pass33'/cajero
insert into usuarios.usuarios(nombre, pass,rol,sucursal) values ('Sondra Martinez','9e8843837f5c8c0a1c8b4d662c3f17ed', 4,3); --pass='pass34'/cajero


--alterar la tabla para que todos esten activos
ALTER TABLE IF EXISTS usuarios.usuarios
ADD COLUMN activo boolean NOT NULL DEFAULT true;

-- insertando la funcion para llamar a los usuarios
CREATE OR REPLACE FUNCTION usuarios.getUser(rol_param INTEGER, ident INTEGER, passw VARCHAR)
RETURNS TABLE(identificacion integer, nombre VARCHAR, pass VARCHAR, rol INTEGER, sucursal INTEGER, activo BOOLEAN)
AS $$
BEGIN
	RETURN QUERY
		SELECT u.identificacion, u.nombre, u.pass, u.rol, u.sucursal, u.activo
		FROM usuarios.usuarios u
		WHERE u.rol = rol_param and u.identificacion=ident and u.pass=passw and u.activo = true;
END;
$$ LANGUAGE plpgsql;

-- dando permisos a esa funcion
GRANT EXECUTE ON FUNCTION usuarios.getUser(INT,INT,VARCHAR) TO admingpx;
GRANT EXECUTE ON FUNCTION usuarios.getUser(INT,INT,VARCHAR) TO inventariogpx;
GRANT EXECUTE ON FUNCTION usuarios.getUser(INT,INT,VARCHAR) TO bodegagpx;
GRANT EXECUTE ON FUNCTION usuarios.getUser(INT,INT,VARCHAR) TO cajerogpx;


-- funcion para llamar a un usuario por id
CREATE OR REPLACE FUNCTION usuarios.getUserById(ident INTEGER)
RETURNS TABLE(identificacion integer, nombre VARCHAR, pass VARCHAR, rol INTEGER, sucursal INTEGER, activo BOOLEAN)
AS $$
BEGIN
	RETURN QUERY
		SELECT u.identificacion, u.nombre, u.pass, u.rol, u.sucursal, u.activo
		FROM usuarios.usuarios u
		WHERE u.identificacion=ident;
END;
$$ LANGUAGE plpgsql;

GRANT EXECUTE ON FUNCTION usuarios.getUserById(INT) TO admingpx;

--ACTUALIZACION DE UN USUARIO
CREATE OR REPLACE FUNCTION usuarios.updateUser(
	p_pass VARCHAR,
    p_nombre VARCHAR,
    p_rol INTEGER,
    p_sucursal INTEGER,
    p_activo BOOLEAN,
	p_identificacion INTEGER
)
RETURNS VOID
AS $$
BEGIN
    UPDATE usuarios.usuarios
    SET
        nombre = p_nombre,
        pass = p_pass,
        rol = p_rol,
        sucursal = p_sucursal,
        activo = p_activo
    WHERE identificacion = p_identificacion;
END;
$$ LANGUAGE plpgsql;
GRANT EXECUTE ON FUNCTION usuarios.updateUser(VARCHAR,VARCHAR,INTEGER,INTEGER,BOOLEAN,INTEGER) TO admingpx;

-- insertar o actualizar un usuario



CREATE OR REPLACE FUNCTION usuarios.updateUser(
    p_pass VARCHAR,
    p_nombre VARCHAR,
    p_rol INTEGER,
    p_sucursal INTEGER,
    p_activo BOOLEAN,
    p_identificacion INTEGER
)
RETURNS VOID
AS $$
BEGIN

        UPDATE usuarios.usuarios
        SET
            nombre = p_nombre,
            pass = p_pass,
            rol = p_rol,
            sucursal = p_sucursal,
            activo = p_activo
        WHERE identificacion = p_identificacion;

END;
$$ LANGUAGE plpgsql;

GRANT EXECUTE ON FUNCTION usuarios.updateOrInsertUser(VARCHAR,VARCHAR,INTEGER,INTEGER,BOOLEAN,INTEGER) TO admingpx;

-- eliminar usuario
CREATE OR REPLACE FUNCTION usuarios.deleteUser(ident INTEGER)
RETURNS VOID
AS $$
BEGIN
	DELETE from usuarios.usuarios where identificacion=ident;
END;
$$ LANGUAGE plpgsql;
GRANT EXECUTE ON FUNCTION usuarios.deleteUser(INTEGER) TO admingpx;


-- crear usuario

CREATE OR REPLACE PROCEDURE usuarios.insertUser(
    p_pass VARCHAR,
    p_nombre VARCHAR,
    p_rol INTEGER,
    p_sucursal INTEGER,
    p_activo BOOLEAN
)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO usuarios.usuarios (nombre, pass, rol,sucursal,activo)
    VALUES (p_nombre, p_pass, p_rol, p_sucursal,p_activo);
END;
$$;
GRANT EXECUTE ON PROCEDURE usuarios.insertUser TO admingpx;

-- funcion para traer productos segun la sucursal
CREATE OR REPLACE FUNCTION sucursales.getProductosSucursal(idS INTEGER)
RETURNS TABLE(codigo integer, nombre VARCHAR, precio_unitario_venta NUMERIC, sucursal VARCHAR,
cantidad_bodega INTEGER, pasillo_bodega INTEGER,pasillo_estanteria INTEGER, cantidad_estanteria INTEGER)
AS $$
BEGIN
	RETURN QUERY
		select p.codigo, p.nombre, p.precio_unitario_venta, s.nombre as sucursal, ps.cantidad_bodega, ps.pasillo_bodega, ps.pasillo_estanteria,ps.cantidad_estanteria
		from sucursales.productos_sucursal ps
		left join productos.productos p on (p.codigo=ps.id_producto)
		left join sucursales.sucursal s on(s.identificacion=ps.id_sucursal) where ps.id_sucursal=idS;
END;
$$ LANGUAGE plpgsql;

-- funcion para insertar nueva compra y me devuelva el id de la nueva compra

CREATE OR REPLACE FUNCTION bodegas.insertCompra(
    c_usuario INTEGER,
    c_sucursal INTEGER,
    c_total_compra NUMERIC
)
RETURNS TABLE(codigo_compra INT)
LANGUAGE plpgsql
AS $$
BEGIN

    RETURN QUERY
    INSERT INTO bodegas.compra (usuario, sucursal, fecha,total_compra)
    VALUES (c_usuario, c_sucursal, CURRENT_DATE,c_total_compra)
    RETURNING codigo;
END;
$$;


--agregando trigger para saber si hay dinero suficiente para la compra

CREATE OR REPLACE FUNCTION bodegas.comprobarDineroSuficiente()
RETURNS TRIGGER AS $$
DECLARE din DOUBLE PRECISION;
BEGIN

	SELECT  s.dinero_caja INTO din FROM bodegas.compra c
	LEFT JOIN sucursales.sucursal s ON(s.identificacion=c.sucursal)
	WHERE c.codigo=NEW.id_compra;
  IF NEW.subtotal>din THEN
    RAISE EXCEPTION 'cantidad de dinero insuficiente, actualmente solo hay %',din;
  END IF;
    RETURN NEW;
END;

$$ LANGUAGE plpgsql;
CREATE TRIGGER trigger_comprobar_dinero
BEFORE INSERT ON bodegas.productos_compra
FOR EACH ROW
EXECUTE FUNCTION bodegas.comprobarDineroSuficiente();



-- trigger para descontar el dinero cuando de hace una nueva compra

CREATE OR REPLACE FUNCTION bodegas.actualizarDineroSucursal()
RETURNS TRIGGER AS $$
DECLARE idsucursal INTEGER;
BEGIN
	SELECT c.sucursal INTO idsucursal FROM bodegas.compra c
	LEFT JOIN sucursales.sucursal s ON(s.identificacion=c.sucursal)
	WHERE c.codigo=NEW.id_compra;

  UPDATE sucursales.sucursal
  SET dinero_caja = dinero_caja - NEW.subtotal
  WHERE identificacion = idsucursal;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;


CREATE TRIGGER trigger_actualizar_dineroSucursal
AFTER INSERT ON bodegas.productos_compra
FOR EACH ROW
EXECUTE FUNCTION bodegas.actualizarDineroSucursal();


--- proceso para insertar productos en la factura de la compra

CREATE OR REPLACE PROCEDURE bodegas.insertarProductoCompra(
    pc_idcompra INTEGER,
    pc_idproducto INTEGER,
    pc_cantidad INTEGER,
    pc_precioUnitario NUMERIC
)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO bodegas.productos_compra (id_compra, id_producto, cantidad,precio_unitario,subtotal)
    VALUES (pc_idcompra, pc_idproducto, pc_cantidad, pc_precioUnitario,pc_cantidad*pc_precioUnitario);
END;
$$;


-- funcion para llamar los productos que no estan incluidos en una SUCURSAL
CREATE OR REPLACE FUNCTION sucursales.traerProductosNoIncluidos(idS INTEGER)
RETURNS TABLE(codigo integer, nombre VARCHAR, precio_unitario_venta NUMERIC)
AS $$
BEGIN
	RETURN QUERY
		SELECT p.codigo, p.nombre, p.precio_unitario_venta
		FROM productos.productos p
		LEFT JOIN sucursales.productos_sucursal ps ON ps.id_producto = p.codigo
		AND ps.id_sucursal = idS
		WHERE ps.id_producto IS NULL;
END;
$$ LANGUAGE plpgsql;


-- proceso para agregar un producto a una sucursal
CREATE OR REPLACE PROCEDURE sucursales.insertProductoSucursal(
    ps_idproducto INTEGER,
    ps_idsucursal INTEGER,
    ps_cantidadestanteria INTEGER,
    ps_cantidadbodega INTEGER,
	ps_pasillobodega INTEGER,
	ps_pasilloestanteria INTEGER
)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO sucursales.productos_sucursal (
	id_producto, id_sucursal, cantidad_estanteria,cantidad_bodega,pasillo_bodega,pasillo_estanteria)
    VALUES (ps_idproducto, ps_idsucursal, ps_cantidadestanteria, ps_cantidadbodega,ps_pasillobodega,ps_pasilloestanteria);
END;
$$;


-- proceso para insertar un nuevo producto
CREATE OR REPLACE PROCEDURE productos.insertarNuevoProducto(
    p_nombre VARCHAR,
    p_precio_unitario_venta NUMERIC
)
LANGUAGE plpgsql
AS $$
BEGIN
	INSERT INTO productos.productos (nombre, precio_unitario_venta, en_venta)
	VALUES (p_nombre, p_precio_unitario_venta, true);
END;
$$;

-- creando procedimiento para insertar productos de bodegas a sucursales
CREATE OR REPLACE PROCEDURE sucursales.pasarProductosEstanteria(
    ps_idproducto INTEGER,
    ps_idsucursal INTEGER,
    ps_cantidadpasarestanteria INTEGER,
    ps_pasilloestanteria INTEGER
)
LANGUAGE plpgsql
AS $$
DECLARE cpbodega INTEGER;
BEGIN
	SELECT  cantidad_bodega INTO cpbodega FROM sucursales.productos_sucursal
	WHERE id_producto = ps_idproducto and id_sucursal=ps_idsucursal;
	IF cpbodega<ps_cantidadpasarestanteria THEN
		    RAISE EXCEPTION 'No hay esa cantidad de productos en bodegas';
	ELSE
	UPDATE sucursales.productos_sucursal SET pasillo_estanteria=ps_pasilloestanteria,
		cantidad_estanteria=cantidad_estanteria+ps_cantidadpasarestanteria,
		cantidad_bodega=cantidad_bodega-ps_cantidadpasarestanteria
		WHERE id_producto = ps_idproducto AND id_sucursal = ps_idsucursal;
	END IF;
END;
$$;


-- creando procedimiento para insertar cajas con un usuario cajero
CREATE OR REPLACE PROCEDURE cajeros.insertCajas(
    c_usuario INTEGER,
    c_sucursal INTEGER
)
LANGUAGE plpgsql
AS $$
DECLARE c_caja INTEGER;
BEGIN
	SELECT codigo INTO c_caja FROM cajeros.cajas WHERE sucursal=c_sucursal ORDER BY codigo DESC LIMIT 1;

	IF c_caja =NULL THEN
		INSERT INTO cajeros.cajas(codigo,usuario,sucursal) VALUES(1,c_usuario,c_sucursal);
	ELSE
		INSERT INTO cajeros.cajas(codigo,usuario,sucursal) VALUES(c_caja+1,c_usuario,c_sucursal);

	END IF;
END;
$$;

-- funcion para llamar los usuarios que no tienen cajas asignadas
CREATE OR REPLACE FUNCTION usuarios.traerUsuariosNoAsignadosACaja(idS INTEGER)
RETURNS TABLE(identificacion integer, nombre VARCHAR, rol INTEGER,sucursalcaja INTEGER, sucursal INTEGER)
AS $$
BEGIN
	RETURN QUERY
		--select para ver que usuario de un sucursal no tiene caja asignada
		SELECT u.identificacion, u.nombre, u.rol, c.sucursal AS sucursalcaja, u.sucursal AS sucursal
			FROM usuarios.usuarios u
		LEFT JOIN cajeros.cajas c ON u.identificacion = c.usuario
		WHERE u.rol = 4 AND c.sucursal IS NULL and u.sucursal=idS;
END;
$$ LANGUAGE plpgsql;



-- funcion para verificar si un usuario tiene asignada una caja o no
CREATE OR REPLACE FUNCTION cajeros.traerCajaDeUsuarioCajero(idU INTEGER)
RETURNS TABLE(codigocaja INTEGER)
AS $$
BEGIN
	RETURN QUERY
		select codigo from cajeros.cajas where usuario=idU;

END;
$$ LANGUAGE plpgsql;

-- procedimiento para crear un cliente

CREATE OR REPLACE PROCEDURE clientes.insertCliente(
    c_nombre VARCHAR,
    c_telefono BIGINT,
    C_NIT VARCHAR
)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO clientes.clientes (nombre, telefono, nit)
	VALUES (c_nombre,c_telefono,c_NIT);
END;
$$;


-- proceso para agregar una solicitud de modificacion al cliente

CREATE OR REPLACE PROCEDURE clientes.InsertsolicitudModificacionCliente(
    s_usuario INTEGER,
	s_sucursal INTEGER,
	s_cliente INTEGER,
	s_descripcion VARCHAR
)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO clientes.solicitudes_modificacion_cliente (usuario, sucursal, cliente,descripcion,aprobacion)
	VALUES (s_usuario,s_sucursal,s_cliente,s_descripcion,false);
END;
$$;


-- funcion para traer solitudes para modificar clientes segun el usuario
CREATE OR REPLACE FUNCTION clientes.traerSolicitudesModClienteUsuario(idU INTEGER)
RETURNS TABLE(id INTEGER,usuario INTEGER, n_usuario VARCHAR, sucursal INTEGER, n_sucursal VARCHAR,
			cliente INTEGER, n_cliente VARCHAR, descripcion VARCHAR, aprobacion BOOLEAN,edit BOOLEAN)
AS $$
BEGIN
	RETURN QUERY
		select s.id, s.usuario, u.nombre as n_usuario, s.sucursal, sc.nombre as n_sucursal, s.cliente, c.nombre as n_cliente,
			s.descripcion, s.aprobacion,s.edit
		from clientes.solicitudes_modificacion_cliente s
		join usuarios.usuarios u on(s.usuario=u.identificacion)
		join sucursales.sucursal sc on(s.sucursal=sc.identificacion)
		join clientes.clientes c on(s.cliente=c.identificacion) where s.usuario = idU;

END;
$$ LANGUAGE plpgsql;

-- actualizacion de la aprobacion de una solicitud
CREATE OR REPLACE FUNCTION clientes.aprobarSolicitudModificacionCliente(
	idSM INTEGER
)
RETURNS VOID
AS $$
BEGIN
    UPDATE clientes.solicitudes_modificacion_cliente
    SET
        aprobacion=true
    WHERE id = idSM;
END;
$$ LANGUAGE plpgsql;


-- actualizacion de un cliente
CREATE OR REPLACE FUNCTION clientes.updateClient(
	c_idCliente INTEGER,
	c_nombre VARCHAR,
	c_telefono BIGINT,
	c_nit VARCHAR
)
RETURNS VOID
AS $$
BEGIN
    UPDATE clientes.clientes
    SET
        nombre=c_nombre, telefono = c_telefono, nit=c_nit
    WHERE identificacion = c_idCliente;
END;
$$ LANGUAGE plpgsql;



-- actualizacion que ya edito la solicitud
CREATE OR REPLACE FUNCTION clientes.confirmarEditarSolicitudesModificaciones(
	idSM INTEGER
)
RETURNS VOID
AS $$
BEGIN
    UPDATE clientes.solicitudes_modificacion_cliente
    SET
        edit=false
    WHERE id = idSM;
END;
$$ LANGUAGE plpgsql;


-- funcion para traer ventas segun una sucursal
CREATE OR REPLACE FUNCTION cajeros.getVentas(idS INTEGER)
RETURNS TABLE(codigo INTEGER,usuario INTEGER, n_usuario VARCHAR, sucursal INTEGER, n_sucursal VARCHAR,
			cliente INTEGER, n_cliente VARCHAR, nit_cliente VARCHAR, total_sin_descuento NUMERIC,
			total_con_descuento NUMERIC, fecha DATE, caja INTEGER, puntos_descuento DECIMAL)
AS $$
BEGIN
	RETURN QUERY
		select v.codigo, v.usuario, u.nombre as n_usuario, v.sucursal, s.nombre as n_sucursal,
			v.cliente, c.nombre as n_cliente, v.nit_cliente, v.total_sin_descuento, v.total_con_descuento,
			v.fecha, v.caja, v.puntos_descuento from cajeros.ventas v
		JOIN usuarios.usuarios u on(v.usuario=u.identificacion)
		JOIN sucursales.sucursal s on(v.sucursal=s.identificacion)
		JOIN clientes.clientes c ON(v.cliente = c.identificacion) where v.sucursal=idS;

END;
$$ LANGUAGE plpgsql;





--agregando trigger para saber si hay esa cantidad de productos en estanteria para vender

CREATE OR REPLACE FUNCTION cajeros.comprobarCantidadProductoVenta()
RETURNS TRIGGER AS $$
DECLARE cantidad INTEGER;
DECLARE idsucursal INTEGER;
BEGIN
	select sucursal into idsucursal from cajeros.ventas where codigo = NEW.id_venta;

	SELECT  cantidad_estanteria INTO cantidad FROM sucursales.productos_sucursal
	WHERE id_producto=NEW.id_producto and id_sucursal=idsucursal;
  IF NEW.cantidad>cantidad THEN
    RAISE EXCEPTION 'No hay suficiente producto para realizar esta venta solo hay %',cantidad;
  END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;


--- proceso para insertar productos en la factura de la venta

CREATE OR REPLACE PROCEDURE cajeros.insertarProductoVenta(
    pv_idventa INTEGER,
    pv_idproducto INTEGER,
    pv_cantidad INTEGER,
    pv_precioUnitario NUMERIC
)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO cajeros.productos_venta (id_venta, id_producto, cantidad,precio_unitario,subtotal)
    VALUES (pv_idventa, pv_idproducto, pv_cantidad, pv_precioUnitario,pv_cantidad*pv_precioUnitario);
END;
$$;


-- trigger para descontar los productos despues de la venta

CREATE OR REPLACE FUNCTION cajeros.actualizarProductosVentas()
RETURNS TRIGGER AS $$
DECLARE idsucursal INTEGER;
BEGIN
	select sucursal into idsucursal from cajeros.ventas where codigo = NEW.id_venta;


  UPDATE sucursales.productos_sucursal SET cantidad_estanteria=cantidad_estanteria-NEW.cantidad
  WHERE id_sucursal=idsucursal and id_producto = NEW.id_producto;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;


CREATE TRIGGER trigger_actualizar_productos_estanteria_venta
AFTER INSERT ON cajeros.productos_venta
FOR EACH ROW
EXECUTE FUNCTION cajeros.actualizarProductosVentas();


--FUNCION PARA AGREGAR EL DINERO COBRADO A LA SUCURSAL
CREATE OR REPLACE FUNCTION cajeros.cobrarDineroSinDescuento(
	idsucursal INTEGER,
	idventa INTEGER
)
RETURNS VOID
AS $$
	DECLARE cantidadDinero DECIMAL;
	DECLARE idcliente INTEGER;
BEGIN
	select total_sin_descuento,cliente INTO cantidadDinero,idcliente FROM cajeros.ventas
		WHERE codigo=idventa;

    UPDATE cajeros.ventas
    SET
        total_con_descuento=total_sin_descuento
    WHERE codigo = idventa;
	UPDATE sucursales.sucursal SET dinero_caja=dinero_caja+cantidadDinero
	WHERE identificacion = idsucursal;
	call tarjetas.insertarPuntosTarjetaDescuento(idcliente,cantidadDinero);

END;
$$ LANGUAGE plpgsql;



--- proceso para agregar puntos a las tarjetas de descuento
CREATE OR REPLACE PROCEDURE tarjetas.insertarPuntosTarjetaDescuento(
    idcliente INTEGER,
    total_venta NUMERIC
)
LANGUAGE plpgsql
AS $$
    DECLARE
        idtarjeta INTEGER;
        xgastot NUMERIC;
        puntosxgastot NUMERIC;
    BEGIN
        SELECT codigo, xgasto, puntosxgasto INTO idtarjeta, xgastot, puntosxgastot
        FROM tarjetas.tarjeta_descuento
        WHERE cliente = idcliente;

        IF idtarjeta IS NOT NULL THEN
            UPDATE tarjetas.tarjeta_descuento
            SET total_puntos = total_puntos + ((total_venta / xgastot) * puntosxgastot)
            WHERE codigo = idtarjeta;
        END IF;
    END;
$$;



-- funcion para traerTarjetasDeDescuento
CREATE OR REPLACE FUNCTION tarjetas.getTarjetas(
)
RETURNS TABLE(codigo INT,tipo CHAR, cliente INTEGER, n_cliente VARCHAR, total_puntos NUMERIC,
	xgasto NUMERIC, puntosxgasto INT,fecha_mod DATE)
LANGUAGE plpgsql
AS $$
BEGIN

    RETURN QUERY
    	SELECT t.codigo, t.tipo, t.cliente, c.nombre as n_cliente, t.total_puntos,
			t.xgasto, t.puntosxgasto, t.fecha_mod
		FROM tarjetas.tarjeta_descuento t
		JOIN clientes.clientes c ON (t.cliente=c.identificacion);
END;
$$;


--- proceso para agregar tarjetas de descuento
CREATE OR REPLACE PROCEDURE tarjetas.insertTarjetas(
    idcliente INTEGER
)
LANGUAGE plpgsql
AS $$
    BEGIN
        INSERT INTO tarjetas.tarjeta_descuento (tipo,cliente,total_puntos,xgasto,puntosxgasto,fecha_mod)
		VALUES ('C',idcliente,0,200,5,CURRENT_DATE);
    END;
$$;


--agregando trigger para saber si un cliente ya tiene tarjeta de descuento

CREATE OR REPLACE FUNCTION tarjetas.verificarTarjetaUsuario()
RETURNS TRIGGER AS $$
DECLARE idtarjeta INTEGER;
BEGIN
	select codigo into idtarjeta from tarjetas.tarjeta_descuento where cliente = NEW.cliente;


  IF idtarjeta IS NOT NULL THEN
    RAISE EXCEPTION 'El cliente ya tiene tarjeta de descuento ';
  END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;


CREATE TRIGGER trigger_verificar_si_tieneTarjeta_Cliente
BEFORE INSERT ON tarjetas.tarjeta_descuento
FOR EACH ROW
EXECUTE FUNCTION tarjetas.verificarTarjetaUsuario();



-- trigger para actualizar la existencia cuando se cancela una
CREATE OR REPLACE FUNCTION cajeros.actalizarProductoXCancelacionVenta()
RETURNS TRIGGER AS $$
DECLARE idsucursal INTEGER;
BEGIN
	SELECT sucursal INTO idsucursal from cajeros.ventas WHERE codigo = OLD.id_venta;
  	UPDATE sucursales.productos_sucursal SET cantidad_estanteria = cantidad_estanteria + OLD.cantidad
  	WHERE id_producto=OLD.id_producto AND id_sucursal =idsucursal;
    RETURN OLD;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_actualizar_pEstanteriaXcancelacionVenta
AFTER DELETE ON cajeros.productos_venta
FOR EACH ROW
EXECUTE FUNCTION cajeros.actalizarProductoXCancelacionVenta();


--- proceso para eliminar una venta que ha sido cancelada
CREATE OR REPLACE PROCEDURE cajeros.cancelarVenta(
    idventa INTEGER
)
LANGUAGE plpgsql
AS $$
    BEGIN
        DELETE FROM cajeros.productos_venta WHERE id_venta=idventa;
		DELETE FROM cajeros.ventas WHERE codigo = idventa;
    END;
$$;



-- insertando la funcion para llamar las solicitudes de tarjetas
CREATE OR REPLACE FUNCTION tarjetas.getSolicitudesTarjetas()
RETURNS TABLE(codigo integer, estado VARCHAR, cliente INTEGER, n_cliente VARCHAR, motivo VARCHAR, descripcion VARCHAR)
AS $$
BEGIN
	RETURN QUERY
		SELECT st.codigo,st.estado, st.cliente,c.nombre as n_cliente, st.motivo, st.descripcion
		FROM tarjetas.solicitudes_tarjetas st
		JOIN clientes.clientes c ON (c.identificacion=st.cliente);
END;
$$ LANGUAGE plpgsql;



--- proceso para insertar una nueva solicitud
CREATE OR REPLACE PROCEDURE tarjetas.insertSolicitudTarjetas(
    idcliente INTEGER, smotivo VARCHAR, sdescripcion VARCHAR
)
LANGUAGE plpgsql
AS $$
    BEGIN
        INSERT INTO tarjetas.solicitudes_tarjetas(estado, cliente, motivo, descripcion)
		VALUES ('PENDIENTE',idcliente,smotivo,sdescripcion);
    END;
$$;



--- funcion para cambiar una tarjeta de tipo

CREATE OR REPLACE FUNCTION tarjetas.cambiarTipoTarjeta(idcliente INTEGER, smotivo VARCHAR, fechamod DATE, idsolicitud INTEGER)
RETURNS TABLE(estado VARCHAR)
AS $$
DECLARE
    idtarjeta INTEGER;
    tipotarjeta CHAR;
    cantidadgastado NUMERIC;
	estadosolicitud VARCHAR;
BEGIN
	estadosolicitud='ACEPTADA';
    -- Obtener el código y tipo de tarjeta del cliente
    SELECT codigo, tipo INTO idtarjeta, tipotarjeta
    FROM tarjetas.tarjeta_descuento
    WHERE cliente = idcliente;
	-- obtener la cantidad comprada desde la fecha de modificacion de la tarjeta
	SELECT SUM(total_sin_descuento) AS total_ventas INTO cantidadgastado
	FROM cajeros.ventas	WHERE cliente = idcliente	AND fecha >= fechamod
	AND fecha <= CURRENT_DATE;

    IF (tipotarjeta = 'C' AND smotivo = 'CO' AND cantidadgastado>10000) THEN
        UPDATE tarjetas.tarjeta_descuento SET puntosxgasto=10, fecha_mod = CURRENT_DATE, tipo='O' WHERE codigo=idtarjeta;
    ELSIF (tipotarjeta = 'O' AND smotivo = 'OP' AND cantidadgastado>20000) THEN
		 UPDATE tarjetas.tarjeta_descuento SET puntosxgasto=20, fecha_mod = CURRENT_DATE, tipo='P' WHERE codigo=idtarjeta;
    ELSIF (tipotarjeta = 'P' AND smotivo = 'PD' AND cantidadgastado>30000 ) THEN
	    UPDATE tarjetas.tarjeta_descuento SET puntosxgasto=30, fecha_mod = CURRENT_DATE, tipo='D' WHERE codigo=idtarjeta;
    ELSE
		estadosolicitud='RECHAZADA';
    END IF;

	UPDATE tarjetas.solicitudes_tarjetas SET estado =estadosolicitud WHERE codigo = idsolicitud;

	RETURN QUERY SELECT estadosolicitud;


END;
$$ LANGUAGE plpgsql;





--FUNCION PARA AGREGAR EL DINERO COBRADO A LA SUCURSAL CON DESCUENTO
CREATE OR REPLACE FUNCTION cajeros.cobrarDineroConDescuento(
	idsucursal INTEGER,
	idventa INTEGER,
	cantidadPuntos DECIMAL
)
RETURNS VOID
AS $$
	DECLARE cantidadDinero DECIMAL;
	DECLARE idcliente INTEGER;
BEGIN
	select total_sin_descuento,cliente INTO cantidadDinero,idcliente FROM cajeros.ventas
		WHERE codigo=idventa;

    UPDATE cajeros.ventas
    SET
        total_con_descuento=total_sin_descuento-cantidadPuntos
    WHERE codigo = idventa;
	UPDATE sucursales.sucursal SET dinero_caja=dinero_caja+(cantidadDinero-cantidadPuntos)
	WHERE identificacion = idsucursal;

	UPDATE tarjetas.tarjeta_descuento SET total_puntos = total_puntos - cantidadPuntos
			WHERE cliente = idcliente;
	call tarjetas.insertarPuntosTarjetaDescuento(idcliente,cantidadDinero);

END;
$$ LANGUAGE plpgsql;





-- trigger para actualizar la existencia cuando se cancela una compra
CREATE OR REPLACE FUNCTION bodegas.actalizarProductoXCancelacionCompra()
RETURNS TRIGGER AS $$
DECLARE idsucursal INTEGER;
BEGIN
	SELECT sucursal INTO idsucursal from bodegas.compra WHERE codigo = OLD.id_compra;
  	UPDATE sucursales.productos_sucursal SET cantidad_bodega = cantidad_bodega - OLD.cantidad
  	WHERE id_producto=OLD.id_producto AND id_sucursal =idsucursal;
	  UPDATE sucursales.sucursal SET dinero_caja = dinero_caja + OLD.subtotal
	  	WHERE identificacion = idsucursal;
    RETURN OLD;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_actualizar_pBodegaXcancelacionCompra
AFTER DELETE ON bodegas.productos_compra
FOR EACH ROW
EXECUTE FUNCTION bodegas.actalizarProductoXCancelacionCompra();


--- proceso para eliminar una compra que ha sido cancelada
CREATE OR REPLACE PROCEDURE bodegas.cancelarCompra(
    idcompra INTEGER
)
LANGUAGE plpgsql
AS $$
    BEGIN
        DELETE FROM bodegas.productos_compra WHERE id_compra=idcompra;
		DELETE FROM bodegas.compra WHERE codigo = idcompra;
    END;
$$;
