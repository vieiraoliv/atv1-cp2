import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-compras',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css']
})
export class ListaComprasComponent {
  items: string[] = ['Maçã', 'Banana', 'Leite'];
}
