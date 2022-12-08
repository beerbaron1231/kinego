import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-top-ventas',
  standalone: true,
  imports: [CommonModule,CardModule],
  templateUrl: './top-ventas.component.html',
  styleUrls: ['./top-ventas.component.css']
})
export class TopVentasComponent {
list:any[]=[
  {
    name:'Felipe Gordillo',
    suscriptores:1,
    code:'xxxxxxxxx123'
  },
  {
    name:'Fabiola Ahumada',
    suscriptores:2,
    code:'xxxxxxxxx124'
  },
  {
    name:'Rocio Gordillo',
    suscriptores:3,
    code:'xxxxxxxxx125'
  },
  {
    name:'Isabel Gordillo',
    suscriptores:4,
    code:'xxxxxxxxx126'
  }
]
}
