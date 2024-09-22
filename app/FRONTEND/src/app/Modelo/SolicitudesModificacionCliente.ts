export class SolicitudesModificacionCliente {
    id!: number;
    usuario!: number;
    n_usuario!: string;
    n_sucursal!: string;
    n_cliente!: string;
    sucursal!: number;
    cliente!: number;
    descripcion!: string;
    aprobacion!: boolean;
    edit!:boolean;
  
    constructor(
      id: number,
      usuario: number,
      n_usuario: string,
      n_sucursal: string,
      n_cliente: string,
      sucursal: number,
      cliente: number,
      descripcion: string,
      aprobacion: boolean,
      edit:boolean
    ) {
      this.id = id;
      this.usuario = usuario;
      this.n_usuario = n_usuario;
      this.n_sucursal = n_sucursal;
      this.n_cliente = n_cliente;
      this.sucursal = sucursal;
      this.cliente = cliente;
      this.descripcion = descripcion;
      this.aprobacion = aprobacion;
      this.edit=edit;
    }
  
    // Getters
    getId(): number {
      return this.id;
    }
  
    getUsuario(): number {
      return this.usuario;
    }
  
    getNUsuario(): string {
      return this.n_usuario;
    }
  
    getNSucursal(): string {
      return this.n_sucursal;
    }
  
    getNCliente(): string {
      return this.n_cliente;
    }
  
    getSucursal(): number {
      return this.sucursal;
    }
  
    getCliente(): number {
      return this.cliente;
    }
  
    getDescripcion(): string {
      return this.descripcion;
    }
  
    getAprobacion(): boolean {
      return this.aprobacion;
    }
  
    // Setters
    setId(id: number): void {
      this.id = id;
    }
  
    setUsuario(usuario: number): void {
      this.usuario = usuario;
    }
  
    setNUsuario(n_usuario: string): void {
      this.n_usuario = n_usuario;
    }
  
    setNSucursal(n_sucursal: string): void {
      this.n_sucursal = n_sucursal;
    }
  
    setNCliente(n_cliente: string): void {
      this.n_cliente = n_cliente;
    }
  
    setSucursal(sucursal: number): void {
      this.sucursal = sucursal;
    }
  
    setCliente(cliente: number): void {
      this.cliente = cliente;
    }
  
    setDescripcion(descripcion: string): void {
      this.descripcion = descripcion;
    }
  
    setAprobacion(aprobacion: boolean): void {
      this.aprobacion = aprobacion;
    }
  }
  