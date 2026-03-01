import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsuarioService {

  private api = 'assets/mocks/usuarios.json';

  private http = inject(HttpClient)

  listar(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.api);
  }
}