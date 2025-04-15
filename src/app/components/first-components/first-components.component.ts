import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first-components',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './first-components.component.html',
  styleUrl: './first-components.component.css'
})
export class FirstComponentsComponent {
  mes: number = 1;
}
