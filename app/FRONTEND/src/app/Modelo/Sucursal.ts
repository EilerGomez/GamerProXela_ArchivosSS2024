export class Sucursal {
    identificacion!: number;
    nombre!: string;
    direccion!: string;
    dinero_caja!: number;
  
    // Constructor
    constructor(identificacion: number, nombre: string, direccion: string, dinero_caja: number) {
      this.identificacion = identificacion;
      this.nombre = nombre;
      this.direccion = direccion;
      this.dinero_caja = dinero_caja;
    }
  
    // Getters
    getIdentificacion(): number {
      return this.identificacion;
    }
  
    getNombre(): string {
      return this.nombre;
    }
  
    getDireccion(): string {
      return this.direccion;
    }
  
    getDineroCaja(): number {
      return this.dinero_caja;
    }
  
    // Setters
    setIdentificacion(identificacion: number): void {
      this.identificacion = identificacion;
    }
  
    setNombre(nombre: string): void {
      this.nombre = nombre;
    }
  
    setDireccion(direccion: string): void {
      this.direccion = direccion;
    }
  
    setDineroCaja(dinero_caja: number): void {
      this.dinero_caja = dinero_caja;
    }
  }
  