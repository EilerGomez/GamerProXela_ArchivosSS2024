export class Usuario{
    identificacion!:number;
    nombre!:String;
    pass!:String;
    rol!:number;
    sucursal!:number;
    activo!:boolean

    constructor(id:number,nombre:String,pass:String,rol:number,sucural:number,activo:boolean){
        this.identificacion=id;
        this.nombre=nombre;
        this.pass=pass;
        this.rol=rol;
        this.sucursal=sucural;
        this.activo=activo
    }
    

    /*identificacion: 1
​
nombre: "Eiler gomez"
​
pass: "1a1dc91c907325c69271ddf0c944bc72"
​
rol: 1
​
sucursal: 1*/

}