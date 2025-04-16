import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentsComponent } from './components/first-components/first-components.component';
import { ListaComprasComponent } from "./components/lista-compras/lista-compras.component";
import { CondicionalIdadeComponent } from './components/condicional-idade/condicional-idade.component';
import { TarefasListComponent } from './components/tarefas-list/tarefas-list.component';
import { PedidoStatusComponent } from './components/pedido-status/pedido-status.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { SwitchValoresComponent } from './components/switch-valores/switch-valores.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponentsComponent, ListaComprasComponent,CondicionalIdadeComponent,TarefasListComponent,PedidoStatusComponent,ListaUsuariosComponent,SwitchValoresComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'atv1-cp2';
}
