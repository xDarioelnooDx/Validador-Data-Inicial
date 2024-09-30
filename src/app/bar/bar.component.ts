import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [
    CommonModule,
  ],

templateUrl: `./bar.component.html` ,

  styleUrl: './bar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarComponent { }
