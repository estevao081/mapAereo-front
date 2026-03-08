import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    MatToolbarModule,
    MatFormFieldModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  constructor(
    private router: Router,
  ) { }

  onAdd() {
    this.router.navigate(['new']);
  }

  onSearchName() {
    this.router.navigate(['findByName']);
  }

  onSearchCode() {
    this.router.navigate(['findByCode']);
  }

  onSearchExpiration() {
    this.router.navigate(['findByExpiration']);
  }

  onSearchAddress() {
    this.router.navigate(['findByAddress']);
  }

  onLogin() {
    this.router.navigate(['auth/login'])
  }

  onRegister() {
    this.router.navigate(['auth/register'])
  }
}
