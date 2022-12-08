import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';

import { TopVentasComponent } from './top-ventas/top-ventas.component';
import { ObjetivosComponent } from './objetivos/objetivos.component';
import { VentaCooperadoresComponent } from './venta-cooperadores/venta-cooperadores.component';
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule,TableModule,CardModule,ToolbarModule, TopVentasComponent, ObjetivosComponent, VentaCooperadoresComponent],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

}
