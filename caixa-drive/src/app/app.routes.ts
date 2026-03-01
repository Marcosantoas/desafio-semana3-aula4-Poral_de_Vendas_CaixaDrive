import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { consorcioResolver } from './core/resolvers/consorcio.resolver';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/login/login.component')
        .then(m => m.LoginComponent)
  },
  {
    path: 'portal',
    canActivate: [authGuard],
    resolve: { estoque: consorcioResolver },
    loadComponent: () =>
      import('./features/portal/portal.component')
        .then(m => m.PortalComponent),
    children: [
      {
        path: 'catalogo',
        loadComponent: () =>
          import('./features/catalogo/catalogo.component')
            .then(m => m.CatalogoComponent)
      },
      {
        path: 'perfil',
        loadComponent: () =>
          import('./features/perfil/perfil.component')
            .then(m => m.PerfilComponent)
      }
    ]
  }
];