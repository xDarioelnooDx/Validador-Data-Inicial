import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar-v',
  standalone: true,
  templateUrl: './bar-v.component.html',
  styleUrl: './bar-v.component.css',
  imports: [
    FormsModule,
    CommonModule,
  ],
})
export class BarVComponent {




  constructor(private router:Router){}

  isVisible: boolean = false; // Estado inicial de la barra

  showBar() {
    this.isVisible = true; // Mostrar la barra

  }

  hideBar() {
    this.isVisible = false; // Ocultar la barra
  }

  inicio(){
    this.router.navigate(['/homeDms']);
  }

  login(){
    this.router.navigate(['/login']);
  }
}

