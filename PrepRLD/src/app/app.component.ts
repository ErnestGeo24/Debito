import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  spamMessages: string[] = [];

  generateSpam(message: string, count: number): void {
    this.spamMessages = []; // Resetta l'array
    for (let i = 0; i < count; i++) {
      this.spamMessages.push(message);
    }
  }
}
