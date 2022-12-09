import { Component, Output,EventEmitter } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  selectedCity: any;
  items: MenuItem[];
  constructor() {
    this.items = [{
      label: 'Options',
      items: [{
          label: 'Update',
          icon: 'bi bi-arrow-clockwise',
          command: () => {
            
          }
      },
      {
          label: 'Delete',
          icon: 'bi bi-x ',
          command: () => {
             
          }
      }
      ]},
      {
          label: 'Navigate',
          items: [{
              label: 'Angular Website',
              icon: 'bi bi-box-arrow-up-right',
              url: 'http://angular.io'
          },
          {
              label: 'Router',
              icon: 'bi bi-upload'
          }
      ]}
  ];
  }
  title = 'Angular15';
  latoggle:boolean=false
  visibleside:boolean=true
  sideBarToogle(){
    this.latoggle =!this.latoggle
    console.log(this.latoggle)
  }
 
  hiddenside(){
    this.visibleside=!this.visibleside
    this.latoggle=false
  }
}
