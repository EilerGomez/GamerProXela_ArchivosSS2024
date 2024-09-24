export class SolicitudesTarjetas {
    codigo!: number;
    estado!: string;
    cliente!: number;
    n_cliente!: string;
    motivo!: string;
    descripcion!: string;

    // Constructor
    constructor(codigo: number, estado: string, cliente: number, n_cliente: string, motivo: string, descripcion: string) {
        this.codigo = codigo;
        this.estado = estado;
        this.cliente = cliente;
        this.n_cliente = n_cliente;
        this.motivo = motivo;
        this.descripcion = descripcion;
    }

    // Getters
    getCodigo(): number {
        return this.codigo;
    }

    getEstado(): string {
        return this.estado;
    }

    getCliente(): number {
        return this.cliente;
    }

    getNCliente(): string {
        return this.n_cliente;
    }

    getMotivo(): string {
        return this.motivo;
    }

    getDescripcion(): string {
        return this.descripcion;
    }

    // Setters
    setCodigo(codigo: number): void {
        this.codigo = codigo;
    }

    setEstado(estado: string): void {
        this.estado = estado;
    }

    setCliente(cliente: number): void {
        this.cliente = cliente;
    }

    setNCliente(n_cliente: string): void {
        this.n_cliente = n_cliente;
    }

    setMotivo(motivo: string): void {
        this.motivo = motivo;
    }

    setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }
}
