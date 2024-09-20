export class Compra{
    codigo!:number;
    sucursal!:number;
    fecha!:String;
    total_compra!:number
    usuario!:number
    constructor(){
        this.codigo=NaN;
        this.sucursal=NaN;
        this.fecha=''
        this.total_compra=NaN
        this.usuario=NaN
    }
}