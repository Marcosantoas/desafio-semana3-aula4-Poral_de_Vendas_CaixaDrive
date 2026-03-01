import { Injectable, signal, computed } from '@angular/core';
import { Veiculo } from '../models/veiculo.model';

@Injectable({ providedIn: 'root' })
export class ReservaService {

  private _reservas = signal<Veiculo[]>(this.carregarLocalStorage());

  reservas = computed(() => this._reservas());

  totalReservas = computed(() => this._reservas().length);

  private carregarLocalStorage(): Veiculo[] {
    const data = localStorage.getItem('reservas');
    return data ? JSON.parse(data) : [];
  }

  reservar(veiculo: Veiculo) {
    const listaAtual = [...this._reservas(), veiculo];
    this._reservas.set(listaAtual);
    localStorage.setItem('reservas', JSON.stringify(listaAtual));
  }

  remover(id: number) {
    const novaLista = this._reservas().filter(v => v.id !== id);
    this._reservas.set(novaLista);
    localStorage.setItem('reservas', JSON.stringify(novaLista));
  }

  limpar() {
    this._reservas.set([]);
    localStorage.removeItem('reservas');
  }
}