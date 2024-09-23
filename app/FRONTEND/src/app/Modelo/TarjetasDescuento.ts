export class TarjetasDescuento {
    codigo!: number;
    tipo!: string;
    cliente!: number;
    n_cliente!: string;
    total_puntos!: number;
    xgasto!: number;
    puntosxgasto!: number;
    fecha_mod!: string;
  
    // Constructor
    constructor(
      codigo: number,
      tipo: string,
      cliente: number,
      n_cliente: string,
      total_puntos: number,
      xgasto: number,
      puntosxgasto: number,
      fecha_mod: string
    ) {
      this.codigo = codigo;
      this.tipo = tipo;
      this.cliente = cliente;
      this.n_cliente = n_cliente;
      this.total_puntos = total_puntos;
      this.xgasto = xgasto;
      this.puntosxgasto = puntosxgasto;
      this.fecha_mod = fecha_mod;
    }
  
    // Getters
    getCodigo(): number {
      return this.codigo;
    }
  
    getTipo(): string {
      return this.tipo;
    }
  
    getCliente(): number {
      return this.cliente;
    }
  
    getN_cliente(): string {
      return this.n_cliente;
    }
  
    getTotal_puntos(): number {
      return this.total_puntos;
    }
  
    getXgasto(): number {
      return this.xgasto;
    }
  
    getPuntosxgasto(): number {
      return this.puntosxgasto;
    }
  
    getFecha_mod(): string {
      return this.fecha_mod;
    }
  
    // Setters
    setCodigo(codigo: number): void {
      this.codigo = codigo;
    }
  
    setTipo(tipo: string): void {
      this.tipo = tipo;
    }
  
    setCliente(cliente: number): void {
      this.cliente = cliente;
    }
  
    setN_cliente(n_cliente: string): void {
      this.n_cliente = n_cliente;
    }
  
    setTotal_puntos(total_puntos: number): void {
      this.total_puntos = total_puntos;
    }
  
    setXgasto(xgasto: number): void {
      this.xgasto = xgasto;
    }
  
    setPuntosxgasto(puntosxgasto: number): void {
      this.puntosxgasto = puntosxgasto;
    }
  
    setFecha_mod(fecha_mod: string): void {
      this.fecha_mod = fecha_mod;
    }
  }
  