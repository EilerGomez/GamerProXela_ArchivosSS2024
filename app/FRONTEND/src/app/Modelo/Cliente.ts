export class Cliente {
    identificacion!: number;
    nombre!: string;
    telefono!: number;
    nit!: string;
    total_gastado:number=0 // este funciona para el reporte 5 
  
    constructor(identificacion: number, nombre: string, telefono: number, nit: string) {
      this.identificacion = identificacion;
      this.nombre = nombre;
      this.telefono = telefono;
      this.nit = nit;
      if(nit===""){this.nit="CF"}
    }
  
    // Getters
    getIdentificacion(): number {
      return this.identificacion;
    }
  
    getNombre(): string {
      return this.nombre;
    }
  
    getTelefono(): number {
      return this.telefono;
    }
  
    getNit(): string {
      return this.nit;
    }
  
    // Setters
    setIdentificacion(identificacion: number): void {
      this.identificacion = identificacion;
    }
  
    setNombre(nombre: string): void {
      this.nombre = nombre;
    }
  
    setTelefono(telefono: number): void {
      this.telefono = telefono;
    }
  
    setNit(nit: string): void {
      this.nit = nit;
    }
  }
  