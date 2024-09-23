export class ProdcutosVenta{
    id_venta!:number
    id_producto!:number
    producto!:String
    cantidad!:number
    precio_unitario!:number
    subtotal!:number

    constructor(id_venta:number, id_producto:number, cantidad:number, precio_unitario:number){//para guardar nuevo productos_compra
        this.id_venta=id_venta
        this.id_producto=id_producto
        this.cantidad=cantidad
        this.precio_unitario=precio_unitario
        this.producto=""
        this.subtotal=0
    }
}