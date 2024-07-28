import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  car: string[]; 
  constructor() { 
     this.car = ['Escavatore', 'Buldozzer', 'Pala gommata', 'Grader','Rullo','Autobetoniere','Gru','Terna','Minipala','Martello pneumatico']; 
  }

}
