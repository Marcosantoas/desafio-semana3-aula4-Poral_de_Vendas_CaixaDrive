import { Injectable, signal, computed } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private _usuario = signal<Usuario | null>(this.getUsuarioLocalStorage());

  usuario = computed(() => this._usuario());

  estaLogado = computed(() => !!this._usuario());

  private getUsuarioLocalStorage(): Usuario | null {
    const data = localStorage.getItem('usuarioLogado');
    return data ? JSON.parse(data) : null;
  }

  login(usuario: Usuario) {
    this._usuario.set(usuario);
    localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
  }

  logout() {
    this._usuario.set(null);
    localStorage.removeItem('usuarioLogado');
  }
}