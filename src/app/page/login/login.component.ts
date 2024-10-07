import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [
    FormsModule,
    CommonModule
  ],
})

export class LoginComponent {

  user: string ="";
  contrasena: string = "";
  entrar:boolean = false;



  constructor(private router: Router){};
  isActive: boolean = false;
  isYoco() {
    return this.user.toLowerCase().includes('yoko');
  }
  isDali() {
    return this.user.toLowerCase().includes('dali');
  }

  navegar(){

    if (this.user === "") {
      this.entrar=true

    }if (this.user.toLowerCase().includes("dms")){
      this.router.navigate(['/homeDms']);
    }

    if (this.user.toLowerCase().includes("yoko")){
      this.router.navigate(['/homeYoko']);
    }
    if (this.user.toLowerCase().includes("dali")){
      this.router.navigate(['/homeDali']);
    }

    else{

    }
  }
}
