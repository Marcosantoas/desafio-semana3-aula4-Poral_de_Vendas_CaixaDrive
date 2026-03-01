import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { PerfilComponent } from './features/perfil/perfil.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule, LoginComponent, PerfilComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'caixa-drive';
}
