import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Veiculo } from '../../core/models/veiculo.model';
import { ReservaService } from '../../core/services/reserva.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent {

  private route = inject(ActivatedRoute);
  private reservaService = inject(ReservaService);

  veiculos: Veiculo[] = [];

  trackById(index: number, item: Veiculo): number {
    return item.id;
  }

  constructor() {
  const dados = this.route.snapshot.data['estoque'] ?? [];
  console.log('ESTOQUE:', dados);
  this.veiculos = [...dados];
}

  reservar(veiculo: Veiculo) {
    this.reservaService.reservar(veiculo);
  }
}