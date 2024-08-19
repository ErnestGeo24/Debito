import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numero: number | null = null;
  ultimoNumeroEstratto: number | null = null;
  numeriEstratti: number[] = [];

  estraiNumero() {
    if (this.numero !== null && !this.numeriEstratti.includes(this.numero)) {
      this.ultimoNumeroEstratto = this.numero;
      this.numeriEstratti.push(this.numero);
      console.log(`Numero estratto: ${this.numero}`);
      console.log(`Tutti i numeri estratti: ${this.numeriEstratti}`);
    } else {
      console.log('Numero già estratto o non valido');
    }
    this.numero = null;
  }
}
