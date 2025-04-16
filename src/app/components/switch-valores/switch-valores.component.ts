import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-switch-valores',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './switch-valores.component.html',
  styleUrls: ['./switch-valores.component.css']
})
export class SwitchValoresComponent {
  value: number | string = 1;
}
