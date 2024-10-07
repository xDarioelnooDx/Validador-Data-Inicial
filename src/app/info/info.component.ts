import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BarComponent } from "../bar/bar.component";
import { BarVComponent } from '../bar-v/bar-v.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [
    CommonModule,
    BarComponent,
    BarVComponent,
    FormsModule
],
  templateUrl: 'info.html',
  styleUrl: './info.component.css',
})
export class InfoComponent {
  hola(){ }
  isActive: boolean = true;
  }
