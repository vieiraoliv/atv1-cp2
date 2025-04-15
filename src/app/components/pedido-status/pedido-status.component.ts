import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pedido-status',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pedido-status.component.html',
  styleUrls: ['./pedido-status.component.css']
})
export class PedidoStatusComponent {
  status: string = 'pendente';
}
