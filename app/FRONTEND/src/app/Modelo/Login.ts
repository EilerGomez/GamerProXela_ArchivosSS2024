export class Login{
    id:number;
    password:String;
    rol:String;

    constructor(id:number, password:String, rol:String){
        this.id=id;
        this.password=password;
        this.rol=rol;
    }
    
    public getUserName(){
        return this.id;
    }

    public  setUserName(userName:number){
        this.id=userName;
    }
    public getPassword(){
        return this.password;
    }

    public  setPassword(password:String){
        this.password=password;
    }
    public getArea(){
        return this.rol;
    }

    public  setArea(rol:String){
        this.rol=rol;
    }
    
}