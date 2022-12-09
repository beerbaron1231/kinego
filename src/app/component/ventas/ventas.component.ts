import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [CommonModule, TableModule, CardModule],
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent {
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
}
