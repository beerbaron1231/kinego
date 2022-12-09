import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PanelModule} from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {RadioButtonModule} from 'primeng/radiobutton';
@Component({
  selector: 'app-detalle-cooperadores',
  standalone: true,
  imports: [CommonModule, FormsModule,PanelModule, TableModule, CardModule,DialogModule,  ButtonModule,InputTextModule,CalendarModule,InputNumberModule,InputMaskModule,RadioButtonModule],
  templateUrl: './detalle-cooperadores.component.html',
  styleUrls: ['./detalle-cooperadores.component.css']
})
export class DetalleCooperadoresComponent {
  display: boolean = false;
  displayBasic: boolean=false;
  value:any
  val:any
  val2:string=''
  selectedValue: string='';
  cooperadores:any[]=[
    {
      name:'Nombre Apellido',
      lista:[
        {
          Nombre:'Felipe Gordillo',
          Correo:'gordillo.felipe@gmail.com',
          Edad:40,
          ProgramaSuscrito:'Content',
          Monto:2000,
          Estado:'Activo',
        },
        {
          Nombre:'Felipe Gordillo',
          Correo:'gordillo.felipe@gmail.com',
          Edad:40,
          ProgramaSuscrito:'Content',
          Monto:500,
          Estado:'Activo',
        },{
          Nombre:'Felipe Gordillo',
          Correo:'gordillo.felipe@gmail.com',
          Edad:40,
          ProgramaSuscrito:'Content',
          Monto:2000,
          Estado:'Activo',
        },{
          Nombre:'Felipe Gordillo',
          Correo:'gordillo.felipe@gmail.com',
          Edad:40,
          ProgramaSuscrito:'Content',
          Monto:2000,
          Estado:'Activo',
        },
      ]
    },
    {
      name:'Nombre Apellido',
      lista:[
        {
          Nombre:'Felipe Gordillo',
          Correo:'gordillo.felipe@gmail.com',
          Edad:40,
          ProgramaSuscrito:'Content',
          Monto:2000,
          Estado:'Activo',
        },
        {
          Nombre:'Felipe Gordillo',
          Correo:'gordillo.felipe@gmail.com',
          Edad:40,
          ProgramaSuscrito:'Content',
          Monto:500,
          Estado:'Activo',
        }
      ]
    },
    {
      name:'Nombre Apellido',
      lista:[
        {
          Nombre:'Felipe Gordillo',
          Correo:'gordillo.felipe@gmail.com',
          Edad:40,
          ProgramaSuscrito:'Content',
          Monto:2000,
          Estado:'Activo',
        }
      ]
    }
  ]
  list:any[]=[
    {
      Nombre:'Felipe Gordillo',
      Correo:'gordillo.felipe@gmail.com',
      Edad:40,
      ProgramaSuscrito:'Content',
      Monto:2000,
      Estado:'Activo',
    },
    {
      Nombre:'Felipe Gordillo',
      Correo:'gordillo.felipe@gmail.com',
      Edad:40,
      ProgramaSuscrito:'Content',
      Monto:500,
      Estado:'Activo',
    },{
      Nombre:'Felipe Gordillo',
      Correo:'gordillo.felipe@gmail.com',
      Edad:40,
      ProgramaSuscrito:'Content',
      Monto:2000,
      Estado:'Activo',
    },{
      Nombre:'Felipe Gordillo',
      Correo:'gordillo.felipe@gmail.com',
      Edad:40,
      ProgramaSuscrito:'Content',
      Monto:2000,
      Estado:'Activo',
    },
  ]
  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.list); // Sale Data
      //console.log(this.listaExportar);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(
        excelBuffer,
        'products'
      );
    });
  }
  saveAsExcelFile(buffer: any, fileName: string): void {
    import('file-saver').then((FileSaver) => {
      let EXCEL_TYPE =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      let EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE,
      });
      window.saveAs(data, fileName + EXCEL_EXTENSION);
    });
  }
  showDialog() {
    this.display = true;
}
guardarusuario(){
  alert('adasd')
}
}
