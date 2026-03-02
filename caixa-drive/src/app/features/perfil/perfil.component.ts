import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaService } from '../../core/services/reserva.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-perfil',
  imports: [CommonModule],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {

  authService = inject(AuthService);
  reservaService = inject(ReservaService);

  remover(id: number) {
    this.reservaService.remover(id);
  }

  limpar() {
    this.reservaService.limpar();
  }
}