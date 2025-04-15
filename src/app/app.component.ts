import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentsComponent } from './components/first-components/first-components.component';
import { ListaComprasComponent } from "./components/lista-compras/lista-compras.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponentsComponent, ListaComprasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'atv1-cp2';
}
