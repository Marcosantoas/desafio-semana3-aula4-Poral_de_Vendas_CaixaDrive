import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Veiculo } from '../models/veiculo.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EstoqueService {

  private api = 'assets/mocks/estoque.json';

  private http = inject(HttpClient)

  listar(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(this.api);
  }
}