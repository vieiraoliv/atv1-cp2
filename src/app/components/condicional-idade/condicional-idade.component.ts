import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-condicional-idade',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './condicional-idade.component.html',
  styleUrls: ['./condicional-idade.component.css']
})
export class CondicionalIdadeComponent {
  idade: number = 17;

  incrementarIdade() {
    this.idade++;
  }

  decrementarIdade() {
    if (this.idade > 0) {
      this.idade--;
    }
  }
}
