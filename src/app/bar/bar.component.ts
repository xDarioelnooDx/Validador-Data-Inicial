import { LoginComponent } from './../page/login/login.component';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [
    CommonModule,
    LoginComponent
  ],

templateUrl: `./bar.component.html` ,

  styleUrl: './bar.component.css',
})
export class BarComponent {
  usuario: string ='';

 }

