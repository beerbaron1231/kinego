import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-objetivos',
  standalone: true,
  imports: [CommonModule,CardModule,HighchartsChartModule],
  templateUrl: './objetivos.component.html',
  styleUrls: ['./objetivos.component.css']
})
export class ObjetivosComponent {
  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  chartOptions: Highcharts.Options =  {
    title: {
        text: 'Ingresos',
        align: 'left'
    },
    xAxis: {
        categories: ['Jet fuel', 'Duty-free diesel', 'Petrol', 'Diesel', 'Gas oil']
    },
    yAxis: {
        title: {
            text: 'Million'
        }
    },
    tooltip: {
        valueSuffix: ' million'
    },
    series: [{
        type: 'column',
        name: '2020',
        data: [59, 83, 65, 228, 184]
    }, {
        type: 'column',
        name: '2021',
        data: [24, 79, 72, 240, 167]
    }, {
        type: 'column',
        name: '2022',
        data: [58, 88, 75, 250, 176]
    }, {
        type: 'spline',
        name: 'Average',
        data: [47, 83.33, 70.66, 239.33, 175.66],
        marker: {
            lineWidth: 2,
            
            fillColor: 'white'
        }
    }, {
        type: 'pie',
        name: 'Total',
        data: [{
            name: '2020',
            y: 619,
            
            dataLabels: {
                enabled: true,
                distance: -50,
                format: '{point.total} M',
                style: {
                    fontSize: '15px'
                }
            }
        }, {
            name: '2021',
            y: 586,
           
        }, {
            name: '2022',
            y: 647,
           
        }],
        center: [75, 65],
        size: 100,
        innerSize: '70%',
        showInLegend: false,
        dataLabels: {
            enabled: false
        }
    }],credits: {
      enabled: false
 },
};
 
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngularFlag: boolean = false; // optional boolean, defaults to false
  
}
