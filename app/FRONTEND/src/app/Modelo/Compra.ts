export class Compra{
    codigo!:number;
    sucursal!:String;
    fecha!:String;
    total_compra!:number
    constructor(){
        this.codigo=NaN;
        this.sucursal='';
        this.fecha=''
        this.total_compra=NaN
    }
}