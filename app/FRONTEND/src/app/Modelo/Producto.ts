export class Producto {
    codigo!:number
    nombre!:String
    precio_unitario_venta!:number
    sucursal!:String
    cantidad_bodega!:number
    pasillo_bodega!:number
    pasillo_estanteria!:number
    cantidad_estanteria!:number

    // Getter y Setter para código
    public getCodigo(): number {
        return this.codigo;
    }

    public setCodigo(value: number) {
        this.codigo = value;
    }

    // Getter y Setter para nombre
    public getNombre(): String {
        return this.nombre;
    }

    public setNombre(value: String) {
        this.nombre = value;
    }

    // Getter y Setter para precio_unitario_venta
    public getPrecioUnitarioVenta(): number {
        return this.precio_unitario_venta;
    }

    public setPrecioUnitarioVenta(value: number) {
        this.precio_unitario_venta = value;
    }

    // Getter y Setter para sucursal
    public getSucursal(): String {
        return this.sucursal;
    }

    public setSucursal(value: String) {
        this.sucursal = value;
    }

    // Getter y Setter para cantidad_bodega
    public getCantidadBodega(): number {
        return this.cantidad_bodega;
    }

    public setCantidadBodega(value: number) {
        this.cantidad_bodega = value;
    }

    // Getter y Setter para pasillo_bodega
    public getPasilloBodega(): number {
        return this.pasillo_bodega;
    }

    public setPasilloBodega(value: number) {
        this.pasillo_bodega = value;
    }

    // Getter y Setter para pasillo_estanteria
    public getPasilloEstanteria(): number {
        return this.pasillo_estanteria;
    }

    public setPasilloEstanteria(value: number) {
        this.pasillo_estanteria = value;
    }

    // Getter y Setter para cantidad_estanteria
    public getCantidadEstanteria(): number {
        return this.cantidad_estanteria;
    }

    public setCantidadEstanteria(value: number) {
        this.cantidad_estanteria = value;
    }
    
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