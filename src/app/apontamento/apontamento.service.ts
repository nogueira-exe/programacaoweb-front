import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apontamento } from './apontamento.model';

@Injectable({
  providedIn: 'root'
})
export class ApontamentoService {

  private apiURL = 'http://localhost:3000/apontamento'

  constructor(private http: HttpClient) { }

  listarApontamento() : Observable<Apontamento[]>{
    return this.http.get<Apontamento[]>(this.apiURL);
  }

  cadastrarApontamento(apontamento: Apontamento) : Observable<Apontamento>{
    return this.http.post<Apontamento>(this.apiURL, apontamento);
  }

  buscarApontamento(id: number) : Observable<Apontamento>{
    return this.http.get<Apontamento>(`${this.apiURL}/${id}`);
  }

  atualizarApontamento(id: number, apontamento: Apontamento) : Observable<Apontamento>{
    return this.http.patch<Apontamento>(`${this.apiURL}/${id}`, apontamento);
  }

  deletarApontamento(id: number) : Observable<void>{
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}
