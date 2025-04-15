import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarefas-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarefas-list.component.html',
  styleUrls: ['./tarefas-list.component.css']
})
export class TarefasListComponent {
  // Lista de tarefas inicial
  tarefas: string[] = ["Estudar Angular", "Fazer exercícios", "Revisar código"];

  removerTarefa(tarefa: string) {
    const index = this.tarefas.indexOf(tarefa);
    if (index !== -1) {
      this.tarefas.splice(index, 1);
    }
  }
}
