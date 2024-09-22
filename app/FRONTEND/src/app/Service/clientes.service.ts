import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../Modelo/Cliente';
import { SolicitudesModificacionCliente } from '../Modelo/SolicitudesModificacionCliente';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }
  Url='http://localhost:3010/api/clientes';
  getClientes(rol:number){
    return this.http.get<Cliente[]>(`${this.Url}?roldb=${rol}`);
  }

  postCliente(c:Cliente, rol:number){
    return this.http.post(`${this.Url}?roldb=${rol}`,c);
  }
  putCliente(c:Cliente, rol:number){
    return this.http.put<Cliente>(`${this.Url}?roldb=${rol}`,(c));
  }

  getSolicitudesClientesModificacion(rol:number, idU:number){
    return this.http.get<SolicitudesModificacionCliente[]>(`${this.Url}solicitudmodificacion/${idU}?roldb=${rol}`);
  }
  getTodasSolicitudesClientesModificacion(rol:number){
    return this.http.get<SolicitudesModificacionCliente[]>(`${this.Url}solicitudmodificacion?roldb=${rol}`);
  }

  postSolicitudesClientesModificacionliente(s:SolicitudesModificacionCliente, rol:number){
    return this.http.post(`${this.Url}solicitudmodificacion?roldb=${rol}`,s);
  }
  putSolicitudesClientesModificacionliente(idSM:number, rol:number){
    return this.http.put<SolicitudesModificacionCliente>(`${this.Url}solicitudmodificacion/${idSM}?roldb=${rol}`,JSON.stringify(idSM));
  }
  putConfirmClienteEditado(idSM:number, rol:number){
    return this.http.put<SolicitudesModificacionCliente>(`${this.Url}solicitudmodificacionEditConfirm/${idSM}?roldb=${rol}`,JSON.stringify(idSM));
  }
}
