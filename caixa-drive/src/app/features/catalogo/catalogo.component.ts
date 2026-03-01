import { Component, inject, signal } from '@angular/core';
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

  veiculos = signal<Veiculo[]>([]);

  private route = inject(ActivatedRoute);
  private reservaService = inject(ReservaService);

  constructor() {
    const dados = this.route.snapshot.data['estoque'];
    this.veiculos.set(dados);
  }

  reservar(veiculo: Veiculo) {
    this.reservaService.reservar(veiculo);
    alert('Veículo reservado com sucesso!');
  }
}