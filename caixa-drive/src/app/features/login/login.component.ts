import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../core/services/usuario.service';
import { AuthService } from '../../core/services/auth.service';
import { Usuario } from '../../core/models/usuario.model';


@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email = signal('');
  senha = signal('');
  erro = signal('');

  private usuarioService = inject(UsuarioService);
  private authService = inject(AuthService);
  private router = inject(Router);

  entrar() {
    this.usuarioService.listar().subscribe(usuarios => {

      const usuarioEncontrado = usuarios.find(
        u => u.email === this.email() && u.senha === this.senha()
      );

      console.log('usuário encontrado',usuarioEncontrado)

      if (usuarioEncontrado) {
        this.authService.login(usuarioEncontrado);
        this.router.navigate(['/portal/catalogo']);
      } else {
        this.erro.set('Email ou senha inválidos');
      }

    });
  }

}
