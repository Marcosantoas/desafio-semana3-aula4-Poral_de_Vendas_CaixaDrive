import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { EstoqueService } from '../services/estoque.service';
import { Veiculo } from '../models/veiculo.model';

export const consorcioResolver: ResolveFn<Veiculo[]> = () => {
  const estoqueService = inject(EstoqueService);
  return estoqueService.listar();
};