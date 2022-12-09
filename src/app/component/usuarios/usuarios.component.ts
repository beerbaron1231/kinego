import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {RadioButtonModule} from 'primeng/radiobutton';
@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule,TableModule, CardModule,DialogModule,ButtonModule,InputTextModule,CalendarModule,InputNumberModule,InputMaskModule,RadioButtonModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  display:boolean=false
  value:any
  val:any
  val2:string=''
  selectedValue: string='';
  lista:any=[
    {
      Nombre:'Felipe Gordillo',
      Correo:'gordillo.felipe@gmail.com',
      Referencia: 1,
      Fechacompra:'10/10/2022',
      Descuento:11,
      monto:3000,
      cupon:'Content',
      nombreprograma:'Dolor Lumbar Inespecifico',
      referido:'gordillo.felipe@gmail.com',
      estado:'Activo'
    }, {
      Nombre:'Felipe Gordillo',
      Correo:'gordillo.felipe@gmail.com',
      Referencia: 1,
      Fechacompra:'10/10/2022',
      Descuento:11,
      monto:3000,
      cupon:'Content',
      nombreprograma:'Dolor Lumbar Inespecifico',
      referido:'gordillo.felipe@gmail.com',
      estado:'Activo'
    }, {
      Nombre:'Felipe Gordillo',
      Correo:'gordillo.felipe@gmail.com',
      Referencia: 1,
      Fechacompra:'10/10/2022',
      Descuento:11,
      monto:3000,
      cupon:'Content',
      nombreprograma:'Dolor Lumbar Inespecifico',
      referido:'gordillo.felipe@gmail.com',
      estado:'Activo'
    }, {
      Nombre:'Felipe Gordillo',
      Correo:'gordillo.felipe@gmail.com',
      Referencia: 1,
      Fechacompra:'10/10/2022',
      Descuento:11,
      monto:3000,
      cupon:'Content',
      nombreprograma:'Dolor Lumbar Inespecifico',
      referido:'gordillo.felipe@gmail.com',
      estado:'Activo'
    }, {
      Nombre:'Felipe Gordillo',
      Correo:'gordillo.felipe@gmail.com',
      Referencia: 1,
      Fechacompra:'10/10/2022',
      Descuento:11,
      monto:3000,
      cupon:'Content',
      nombreprograma:'Dolor Lumbar Inespecifico',
      referido:'gordillo.felipe@gmail.com',
      estado:'Activo'
    }, {
      Nombre:'Felipe Gordillo',
      Correo:'gordillo.felipe@gmail.com',
      Referencia: 1,
      Fechacompra:'10/10/2022',
      Descuento:11,
      monto:3000,
      cupon:'Content',
      nombreprograma:'Dolor Lumbar Inespecifico',
      referido:'gordillo.felipe@gmail.com',
      estado:'Activo'
    }, {
      Nombre:'Felipe Gordillo',
      Correo:'gordillo.felipe@gmail.com',
      Referencia: 1,
      Fechacompra:'10/10/2022',
      Descuento:11,
      monto:3000,
      cupon:'Content',
      nombreprograma:'Dolor Lumbar Inespecifico',
      referido:'gordillo.felipe@gmail.com',
      estado:'Activo'
    }, {
      Nombre:'Felipe Gordillo',
      Correo:'gordillo.felipe@gmail.com',
      Referencia: 1,
      Fechacompra:'10/10/2022',
      Descuento:11,
      monto:3000,
      cupon:'Content',
      nombreprograma:'Dolor Lumbar Inespecifico',
      referido:'gordillo.felipe@gmail.com',
      estado:'Activo'
    },
    {
      Nombre:'Felipe Gordillo',
      Correo:'gordillo.felipe@gmail.com',
      Referencia: 2,
      Fechacompra:'10/10/2022',
      Descuento:10,
      monto:4000,
      cupon:'Content',
      nombreprograma:'Dolor Lumbar Inespecifico',
      referido:'gordillo.felipe@gmail.com',
      estado:'Activo'
    }, {
      Nombre:'Felipe Gordillo',
      Correo:'gordillo.felipe@gmail.com',
      Referencia: 3,
      Fechacompra:'10/10/2022',
      Descuento:10,
      monto:5000,
      cupon:'Content',
      nombreprograma:'Dolor Lumbar Inespecifico',
      referido:'gordillo.felipe@gmail.com',
      estado:'Activo'
    }, {
      Nombre:'Felipe Gordillo',
      Correo:'gordillo.felipe@gmail.com',
      Referencia: 4,
      Fechacompra:'10/10/2022',
      Descuento:10,
      monto:1000,
      cupon:'Content',
      nombreprograma:'Dolor Lumbar Inespecifico',
      referido:'gordillo.felipe@gmail.com',
      estado:'Activo'
    }, {
      Nombre:'Felipe Gordillo',
      Correo:'gordillo.felipe@gmail.com',
      Referencia: 5,
      Fechacompra:'10/10/2022',
      Descuento:10,
      monto:1000,
      cupon:'Content',
      nombreprograma:'Dolor Lumbar Inespecifico',
      referido:'gordillo.felipe@gmail.com',
      estado:'Activo'
    },
  ]
  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.lista); // Sale Data
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
