export interface Usuario {
  id: number;
  nome: string;
  perfil: 'VIP' | 'Standard' | 'Admin';
  email: string;
  senha: string;
}