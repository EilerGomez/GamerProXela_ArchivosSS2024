export class Producto {
    codigo!:number
    nombre!:String
    precio_unitario_venta!:number
    sucursal!:String
    cantidad_bodega!:number
    pasillo_bodega!:number
    pasillo_estanteria!:number
    cantidad_estanteria!:number


    constructor(codigo:number, nombre:String, precioV:number, sucursal:String, cbodega:number,
        passilloBodega:number
    ){//contructor para el de bodegas
        this.codigo=codigo;
        this.nombre=nombre;
        this.precio_unitario_venta=precioV;
        this.sucursal=sucursal;
        this.cantidad_bodega=cbodega
        this.pasillo_bodega=passilloBodega;
        this.pasillo_estanteria=0;
        this.cantidad_estanteria=0;

    }
    



}