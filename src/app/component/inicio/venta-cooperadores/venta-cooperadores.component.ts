import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { PrimeIcons } from 'primeng/api';
@Component({
  selector: 'app-venta-cooperadores',
  standalone: true,
  imports: [CommonModule, CardModule, TableModule],
  templateUrl: './venta-cooperadores.component.html',
  styleUrls: ['./venta-cooperadores.component.css'],
})
export class VentaCooperadoresComponent {
  products = [
    {
      suscriptor: 'Content',
      date: 'dd/mm/aaaa',
      nameuser: 'Content',
      suscription: 'Content',
      sellvalue: 'Content',
      
    },
    {
      suscriptor: 'Content',
      date: 'dd/mm/aaaa',
      nameuser: 'Content',
      suscription: 'Content',
      sellvalue: 'Content',
      
    }, {
      suscriptor: 'Content',
      date: 'dd/mm/aaaa',
      nameuser: 'Content',
      suscription: 'Content',
      sellvalue: 'Content',
      
    }, {
      suscriptor: 'Content',
      date: 'dd/mm/aaaa',
      nameuser: 'Content',
      suscription: 'Content',
      sellvalue: 'Content',
      
    }, {
      suscriptor: 'Content',
      date: 'dd/mm/aaaa',
      nameuser: 'Content',
      suscription: 'Content',
      sellvalue: 'Content',
      
    }, {
      suscriptor: 'Content',
      date: 'dd/mm/aaaa',
      nameuser: 'Content',
      suscription: 'Content',
      sellvalue: 'Content',
      
    }, {
      suscriptor: 'Content',
      date: 'dd/mm/aaaa',
      nameuser: 'Content',
      suscription: 'Content',
      sellvalue: 'Content',
      
    },
  ];
  
  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.products); // Sale Data
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
