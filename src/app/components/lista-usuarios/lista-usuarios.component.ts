import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent {
  usuarios: { nome: string; idade: number }[] = [
    { nome: 'Ana', idade: 25 },
    { nome: 'Carlos', idade: 30 }
  ];
}
