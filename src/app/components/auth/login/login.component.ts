import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { LoginService } from '../../../services/login-service';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    private location: Location,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onCancel() {
    this.location.back();
  }

  submit() {
    console.log('submit chamado'); // log para debug
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const email = this.loginForm.value.email ?? '';
    const password = this.loginForm.value.password ?? '';

    console.log('Login enviado:', { email, password });

    this.loginService.login(email, password).subscribe({
      next: () => {
        console.log('Login OK, navegando para home');
        this.router.navigate(['home']);
      },
      error: () => console.log('Erro no login')
    });
  }
}
