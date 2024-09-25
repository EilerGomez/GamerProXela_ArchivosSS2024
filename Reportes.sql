


-- funcion para traer ventas segun una sucursal
CREATE OR REPLACE FUNCTION admin.getDescuentosXTiempo(de DATE, hasta DATE)
RETURNS TABLE(codigo INTEGER,usuario INTEGER, n_usuario VARCHAR, sucursal INTEGER, n_sucursal VARCHAR,
			cliente INTEGER, n_cliente VARCHAR, nit_cliente VARCHAR, total_sin_descuento NUMERIC,
			total_con_descuento NUMERIC, fecha DATE, caja INTEGER, puntos_descuento DECIMAL)
AS $$
BEGIN
	RETURN QUERY
		select v.codigo, v.usuario, u.nombre as n_usuario, v.sucursal, s.nombre as n_sucursal,
			v.cliente, c.nombre as n_cliente, c.nit, v.total_sin_descuento, v.total_con_descuento,
			v.fecha, v.caja, v.puntos_descuento from cajeros.ventas v
		JOIN usuarios.usuarios u on(v.usuario=u.identificacion)
		JOIN sucursales.sucursal s on(v.sucursal=s.identificacion)
		JOIN clientes.clientes c ON(v.cliente = c.identificacion)
		WHERE v.fecha >= de AND v.fecha <= hasta
		ORDER BY v.codigo DESC;

END;
$$ LANGUAGE plpgsql;

--select * from admin.getDescuentosXTiempo('2024-09-23','2024-09-24');



-- reporte 2 top 10 ventas mas grandes en x tiempo

CREATE OR REPLACE FUNCTION admin.get10VentasMasGrandesXTiempo(de DATE, hasta DATE)
RETURNS TABLE(codigo INTEGER,usuario INTEGER, n_usuario VARCHAR, sucursal INTEGER, n_sucursal VARCHAR,
			cliente INTEGER, n_cliente VARCHAR, nit_cliente VARCHAR, total_sin_descuento NUMERIC,
			total_con_descuento NUMERIC, fecha DATE, caja INTEGER, puntos_descuento DECIMAL)
AS $$
BEGIN
	RETURN QUERY
		select v.codigo, v.usuario, u.nombre as n_usuario, v.sucursal, s.nombre as n_sucursal,
			v.cliente, c.nombre as n_cliente, c.nit, v.total_sin_descuento, v.total_con_descuento,
			v.fecha, v.caja, v.puntos_descuento from cajeros.ventas v
		JOIN usuarios.usuarios u on(v.usuario=u.identificacion)
		JOIN sucursales.sucursal s on(v.sucursal=s.identificacion)
		JOIN clientes.clientes c ON(v.cliente = c.identificacion)
		WHERE v.fecha >= de AND v.fecha <= hasta
		ORDER BY v.total_sin_descuento  DESC LIMIT 10;

END;
$$ LANGUAGE plpgsql;

--select * from admin.get10VentasMasGrandesXTiempo('2024-09-23','2024-09-24');




-- reporte 3 top 2 sucursales con mas ingreso


CREATE OR REPLACE FUNCTION admin.get2SucursalesConMasIngreso()
RETURNS TABLE(identificacion INTEGER, nombre VARCHAR, direccion VARCHAR,dinero_caja NUMERIC )
AS $$
BEGIN
	RETURN QUERY
		SELECT s.identificacion, s.nombre, s.direccion, SUM(v.total_sin_descuento) AS dinero_caja
		FROM cajeros.ventas v
		JOIN sucursales.sucursal s ON v.sucursal = s.identificacion
		GROUP BY s.identificacion, s.nombre, s.direccion ORDER BY dinero_caja DESC LIMIT 2;

END;
$$ LANGUAGE plpgsql;

--select * from admin.get2SucursalesConMasIngreso();


-- reporte 4 Top 10 artículos más vendidos.

CREATE OR REPLACE FUNCTION admin.get10ArticulosMasVendidos()
RETURNS TABLE(codigo integer, nombre VARCHAR, precio_unitario_venta BIGINT)
AS $$
BEGIN
	RETURN QUERY
		SELECT p.codigo, p.nombre, SUM(pv.cantidad) as cantidad
	FROM cajeros.productos_venta pv
		JOIN productos.productos p ON (pv.id_producto=p.codigo)
	GROUP BY p.codigo, p.nombre ORDER BY cantidad DESC LIMIT 10;
END;
$$ LANGUAGE plpgsql;

--select * from admin.get10ArticulosMasVendidos();


 -- reporte 5 ● Top 10 clientes que más dinero han gastado.

CREATE OR REPLACE FUNCTION admin.get10ClientesQueHanGastadoMas()
RETURNS TABLE(identificacion integer, nombre VARCHAR, telefono BIGINT,nit varchar, total_gastado numeric)
AS $$
BEGIN
	RETURN QUERY
		 select c.identificacion, c.nombre, c.telefono, c.nit, SUM(v.total_sin_descuento) as total_gastado
 			from cajeros.ventas v
 		JOIN clientes.clientes c ON(c.identificacion=v.cliente)
		 GROUP BY c.identificacion, c.nombre, c.telefono, c.nit ORDER BY total_gastado DESC LIMIT 10;
END;
$$ LANGUAGE plpgsql;

--select * from admin.get10ClientesQueHanGastadoMas();
