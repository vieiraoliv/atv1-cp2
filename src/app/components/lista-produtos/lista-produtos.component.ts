import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-produtos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent {
  // Array de produtos
  produtos: { nome: string; preco: number; promocao: boolean }[] = [
    { nome: 'Notebook', preco: 3000, promocao: true },
    { nome: 'Mouse', preco: 50, promocao: false },
  ];
}
