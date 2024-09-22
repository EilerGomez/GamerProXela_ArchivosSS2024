export class Cajas {
    codigo!: number;
    n_usuario!: string;
    c_usuario!: number;
    n_sucursal!: string;
    c_sucursal!: number;

    constructor(codigo: number, n_usuario: string, c_usuario: number, n_sucursal: string, c_sucursal: number) {
        this.codigo = codigo;
        this.n_usuario = n_usuario;
        this.c_usuario = c_usuario;
        this.n_sucursal = n_sucursal;
        this.c_sucursal = c_sucursal;
    }

    // Getters
    getCodigo(): number {
        return this.codigo;
    }

    getNUsuario(): string {
        return this.n_usuario;
    }

    getCUsuario(): number {
        return this.c_usuario;
    }

    getNSucursal(): string {
        return this.n_sucursal;
    }

    getCSucursal(): number {
        return this.c_sucursal;
    }

    // Setters
    setCodigo(codigo: number): void {
        this.codigo = codigo;
    }

    setNUsuario(n_usuario: string): void {
        this.n_usuario = n_usuario;
    }

    setCUsuario(c_usuario: number): void {
        this.c_usuario = c_usuario;
    }

    setNSucursal(n_sucursal: string): void {
        this.n_sucursal = n_sucursal;
    }

    setCSucursal(c_sucursal: number): void {
        this.c_sucursal = c_sucursal;
    }
}
