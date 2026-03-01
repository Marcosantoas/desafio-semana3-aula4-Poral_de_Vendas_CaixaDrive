import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaService } from '../../core/services/reserva.service';

@Component({
  selector: 'app-perfil',
  imports: [CommonModule],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {

  constructor(public reservaService: ReservaService) {}

  remover(id: number) {
    this.reservaService.remover(id);
  }

  limpar() {
    this.reservaService.limpar();
  }
}