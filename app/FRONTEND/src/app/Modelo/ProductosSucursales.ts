export class ProductosSucursales{
    id_producto!:number
    id_sucursal!:number
    cantidad_estanteria!:number
    cantidad_bodega!:number
    pasillo_bodega!:number
    pasillo_estanteria!:number

    constructor(ip:number,is:number,ce:number,cb:number,pb:number,pe:number){
        this.id_producto=ip
        this.id_sucursal=is
        this.cantidad_estanteria=ce
        this.cantidad_bodega=cb
        this.pasillo_bodega=pb
        this.pasillo_estanteria=pe
    }
}