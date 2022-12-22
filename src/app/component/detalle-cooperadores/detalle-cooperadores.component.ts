import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PanelModule} from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputSwitchModule} from 'primeng/inputswitch';
import { DropdownModule } from 'primeng/dropdown';

import { MessageModule } from 'primeng/message';
import Validation from 'src/app/services/validadorrut';
@Component({
  selector: 'app-detalle-cooperadores',
  standalone: true,
  imports: [ CommonModule, FormsModule,ReactiveFormsModule,PanelModule, TableModule, CardModule,DialogModule,  ButtonModule,InputTextModule,CalendarModule,InputNumberModule,InputMaskModule,RadioButtonModule,InputSwitchModule,DropdownModule,MessageModule],
  templateUrl: './detalle-cooperadores.component.html',
  styleUrls: ['./detalle-cooperadores.component.css']
})
export class DetalleCooperadoresComponent {
  display: boolean = false;
  displayBasic: boolean=false;
  value:any
  val:any
  val2:string=''
  selectedValue1: boolean=false
  selectedValue2:  boolean=false
  nombreformingreso:string=''
  formulario = this.fb.group({
    name: new FormControl('', [Validators.required]),
    rut: new FormControl('', [Validators.required, Validation.valrut('RUT')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    programa: new FormControl('', [Validators.required]),
    fechanacimiento: new FormControl('', [Validators.required]),
    descuento: new FormControl(false, [Validators.required]),
    kine: new FormControl(false),
    Cooperador: new FormControl(false),
    rol: new FormControl(''),
    empresa: new FormControl(''),
    descuento2: new FormControl(''),
    codigocooperador: new FormControl(''),
  });
  constructor(
    private fb: FormBuilder
  ){

  }
  cooperadores:any[]=[
    {
      name:'Nombre Apellido',
      rut:'123456789-k',
      lista:[
        {
          name:'Felipe Gordillo',
          email:'gordillo.felipe@gmail.com',
          rut:'123456789-k',
          Edad:40,
          ProgramaSuscrito:'Content',
          Monto:2000,
          Estado:'Activo',
        },
        {
          name:'Felipe Gordillo',
          email:'gordillo.felipe@gmail.com',
          rut:'123456789-k',
          Edad:40,
          ProgramaSuscrito:'Content',
          Monto:2000,
          Estado:'Activo',
        },{
          name:'Felipe Gordillo',
          email:'gordillo.felipe@gmail.com',
          rut:'123456789-k',
          Edad:40,
          ProgramaSuscrito:'Content',
          Monto:2000,
          Estado:'Activo',
        },{
          name:'Felipe Gordillo',
          email:'gordillo.felipe@gmail.com',
          rut:'123456789-k',
          Edad:40,
          ProgramaSuscrito:'Content',
          Monto:2000,
          Estado:'Activo',
        },
      ]
    },
    {
      name:'Nombre Apellido',
      rut:'123456789-k',
      lista:[
        {
          name:'Felipe Gordillo',
          email:'gordillo.felipe@gmail.com',
          rut:'123456789-k',
          Edad:40,
          ProgramaSuscrito:'Content',
          Monto:2000,
          Estado:'Activo',
        },
        {
          name:'Felipe Gordillo',
          email:'gordillo.felipe@gmail.com',
          rut:'123456789-k',
          Edad:40,
          ProgramaSuscrito:'Content',
          Monto:2000,
          Estado:'Activo',
        },{
          name:'Felipe Gordillo',
          email:'gordillo.felipe@gmail.com',
          rut:'123456789-k',
          Edad:40,
          ProgramaSuscrito:'Content',
          Monto:2000,
          Estado:'Activo',
        },{
          name:'Felipe Gordillo',
          email:'gordillo.felipe@gmail.com',
          rut:'123456789-k',
          Edad:40,
          ProgramaSuscrito:'Content',
          Monto:2000,
          Estado:'Activo',
        },
      ]
    }, {
      name:'Nombre Apellido',
      rut:'123456789-k',
      lista:[
        {
          name:'Felipe Gordillo',
          email:'gordillo.felipe@gmail.com',
          rut:'123456789-k',
          Edad:40,
          ProgramaSuscrito:'Content',
          Monto:2000,
          Estado:'Activo',
        },
        {
          name:'Felipe Gordillo',
          email:'gordillo.felipe@gmail.com',
          rut:'123456789-k',
          Edad:40,
          ProgramaSuscrito:'Content',
          Monto:2000,
          Estado:'Activo',
        },{
          name:'Felipe Gordillo',
          email:'gordillo.felipe@gmail.com',
          rut:'123456789-k',
          Edad:40,
          ProgramaSuscrito:'Content',
          Monto:2000,
          Estado:'Activo',
        },{
          name:'Felipe Gordillo',
          email:'gordillo.felipe@gmail.com',
          rut:'123456789-k',
          Edad:40,
          ProgramaSuscrito:'Content',
          Monto:2000,
          Estado:'Activo',
        },
      ]
    }, {
      name:'Nombre Apellido',
      rut:'123456789-k',
      lista:[
        {
          name:'Felipe Gordillo',
          email:'gordillo.felipe@gmail.com',
          rut:'123456789-k',
          Edad:40,
          ProgramaSuscrito:'Content',
          Monto:2000,
          Estado:'Activo',
        },
        {
          name:'Felipe Gordillo',
          email:'gordillo.felipe@gmail.com',
          rut:'123456789-k',
          Edad:40,
          ProgramaSuscrito:'Content',
          Monto:2000,
          Estado:'Activo',
        },{
          name:'Felipe Gordillo',
          email:'gordillo.felipe@gmail.com',
          rut:'123456789-k',
          Edad:40,
          ProgramaSuscrito:'Content',
          Monto:2000,
          Estado:'Activo',
        },{
          name:'Felipe Gordillo',
          email:'gordillo.felipe@gmail.com',
          rut:'123456789-k',
          Edad:40,
          ProgramaSuscrito:'Content',
          Monto:2000,
          Estado:'Activo',
        },
      ]
    },
  ]
  list:any[]=[
    {
      name:'Felipe Gordillo',
      rut:'12345678-9',
      mail:'gordillo.felipe@gmail.com',
      Edad:40,
      ProgramaSuscrito:'Content',
      Monto:2000,
      Estado:'Activo',
    },
    {
      name:'Felipe Gordillo',
      rut:'12345678-9',
      mail:'gordillo.felipe@gmail.com',
      Edad:40,
      ProgramaSuscrito:'Content',
      Monto:2000,
      Estado:'Activo',
    }, {
      name:'Felipe Gordillo',
      rut:'12345678-9',
      mail:'gordillo.felipe@gmail.com',
      Edad:40,
      ProgramaSuscrito:'Content',
      Monto:2000,
      Estado:'Activo',
    }, {
      name:'Felipe Gordillo',
      rut:'12345678-9',
      mail:'gordillo.felipe@gmail.com',
      Edad:40,
      ProgramaSuscrito:'Content',
      Monto:2000,
      Estado:'Activo',
    },
  ]
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
  showDialog() { //formulario de ingreso de cooperador
    this.formulario.reset()
    this.nombreformingreso="Ingreso Nuevo Cooperador"

    this.display = true;
}
showDialogedit(datosusuario:any) {//formulario edicion de cooperador
  this.nombreformingreso="Editar Cooperador"
  this.formulario.controls['name'].setValue(datosusuario.name)
  this.formulario.controls['rut'].setValue(datosusuario.rut)
  this.display = true;
}
showDialogDerivador(){//formulario ingreso de derivador
this.formulario.reset()
  this.nombreformingreso="Ingresar Derivador"

  this.display = true;
}
showDialogDerivadoredit(datosusuario:any) {//formulario edicion de derivador

  this.nombreformingreso="Editar Derivador"
  this.formulario.controls['name'].setValue(datosusuario.name)
  this.formulario.controls['rut'].setValue(datosusuario.rut)
  this.display = true;
}
guardarusuario(){
  alert('adasd')
}
cambioestado() {
  if (this.formulario.controls['Cooperador'].value) {
    this.formulario.controls['rol'].setValidators([Validators.required]);
    this.formulario.controls['empresa'].setValidators([Validators.required]);
    this.formulario.controls['descuento2'].setValidators([
      Validators.required,
    ]);
    this.formulario.controls['codigocooperador'].setValidators([
      Validators.required,
    ]);
  } else {
    this.formulario.controls['rol'].removeValidators([Validators.required]);
    this.formulario.controls['empresa'].removeValidators([
      Validators.required,
    ]);
    this.formulario.controls['descuento2'].removeValidators([
      Validators.required,
    ]);
    this.formulario.controls['codigocooperador'].removeValidators([
      Validators.required,
    ]);
    this.formulario.controls['rol'].setValue(null)
    this.formulario.controls['empresa'].setValue(null)
    this.formulario.controls['descuento2'].setValue(null)
    this.formulario.controls['codigocooperador'].setValue(null)
  }

  this.formulario.controls['rol'].updateValueAndValidity;
  this.formulario.controls['empresa'].updateValueAndValidity;
  this.formulario.controls['descuento2'].updateValueAndValidity;
  this.formulario.controls['codigocooperador'].updateValueAndValidity;
}
}
