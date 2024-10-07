import { Component } from '@angular/core';

@Component({
  selector: 'app-comprobar',
  templateUrl: './comprobar.component.html',
  styleUrl: './comprobar.component.css'
})
export class comprobarComponent {
  input = document.getElementById('docpicker');
  resultado = document.getElementById('resultado');

  valor: string = '';
  tieneDato: boolean = false;
  visibles:boolean = false;

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.valor = input.value;
    this.tieneDato = !!this.valor;
    this.visibles = this.tieneDato;
  }

  visible(){
    this.visibles = true;
  }
}
