//DEL DE BODEGA
insert into compra(usuario,sucursal,fecha,total_compra) values (1,1,CURRENT_DATE,0);//generar compra

select c.codigo, s.nombre AS sucursal, c.fecha, c.total_compra from bodegas.compra
c join sucursales.sucursal s on(c.sucursal=s.identificacion); --seleccionar todas las compras

