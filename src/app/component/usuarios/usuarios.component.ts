import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [ CommonModule, FormsModule,ReactiveFormsModule,PanelModule, TableModule, CardModule,DialogModule,  ButtonModule,InputTextModule,CalendarModule,InputNumberModule,InputMaskModule,InputSwitchModule,DropdownModule],

  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent {
  display: boolean = false;
  value: any;
  val: any;
  val2: string = '';
  selectedValue1: boolean = false;
  selectedValue2: boolean = false;
  lista: any = [
    {
      Nombre: 'Felipe Gordillo',
      Correo: 'Felipe Gordillo',
      Edad: 40,
      programasuscrito: 'Content',
      kinesiologo: 'Si',
      estado: 'activo',
    },{
      Nombre: 'Felipe Gordillo',
      Correo: 'Felipe Gordillo',
      Edad: 40,
      programasuscrito: 'Content',
      kinesiologo: 'Si',
      estado: 'activo',
    },{
      Nombre: 'Felipe Gordillo',
      Correo: 'Felipe Gordillo',
      Edad: 40,
      programasuscrito: 'Content',
      kinesiologo: 'Si',
      estado: 'activo',
    },{
      Nombre: 'Felipe Gordillo',
      Correo: 'Felipe Gordillo',
      Edad: 40,
      programasuscrito: 'Content',
      kinesiologo: 'Si',
      estado: 'activo',
    },{
      Nombre: 'Felipe Gordillo',
      Correo: 'Felipe Gordillo',
      Edad: 40,
      programasuscrito: 'Content',
      kinesiologo: 'Si',
      estado: 'activo',
    },{
      Nombre: 'Felipe Gordillo',
      Correo: 'Felipe Gordillo',
      Edad: 40,
      programasuscrito: 'Content',
      kinesiologo: 'Si',
      estado: 'activo',
    },{
      Nombre: 'Felipe Gordillo',
      Correo: 'Felipe Gordillo',
      Edad: 40,
      programasuscrito: 'Content',
      kinesiologo: 'Si',
      estado: 'activo',
    },{
      Nombre: 'Felipe Gordillo',
      Correo: 'Felipe Gordillo',
      Edad: 40,
      programasuscrito: 'Content',
      kinesiologo: 'Si',
      estado: 'activo',
    },{
      Nombre: 'Felipe Gordillo',
      Correo: 'Felipe Gordillo',
      Edad: 40,
      programasuscrito: 'Content',
      kinesiologo: 'Si',
      estado: 'activo',
    },{
      Nombre: 'Felipe Gordillo',
      Correo: 'Felipe Gordillo',
      Edad: 40,
      programasuscrito: 'Content',
      kinesiologo: 'Si',
      estado: 'activo',
    },
  ];

  programas:any=[
    {
    name:'Lumbar',
    id:1
  },
  {
    name:'Rodillas',
    id:2
  }
  , {
    name:'Otros',
    id:3
  }
]
  nombreformingreso: string = '';
  formulario = this.fb.group({
    name: new FormControl('', [Validators.required]),
    rut: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    val: new FormControl('', [Validators.required]),
    val2: new FormControl('', [Validators.required]),
    selectedValue1: new FormControl(false, [Validators.required]),
    selectedValue2: new FormControl(false, [Validators.required]),
  });

  constructor(private fb: FormBuilder) {}
  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.lista); // Sale Data
      //console.log(this.listaExportar);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'products');
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
    this.formulario.reset()
    this.display = true;
  }
  guardarusuario() {
    alert('adasd');
  }
}
