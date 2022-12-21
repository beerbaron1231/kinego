import { Component, Output,EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MenuItem} from 'primeng/api';
import { AuthServiceService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  selectedCity: any;
  items: MenuItem[];
  constructor(public _au:AuthServiceService) {
    this.items = [{
      label: 'Prueba',
      items: [{
          label: 'Inicio',
          icon: 'bi bi-arrow-clockwise',
          routerLink: '/inicio',
          command: () => {
            
          }
      },
      {
          label: 'Log Out',
          icon: 'bi bi-door-closed ',
          routerLink: '/login',
          command: () => {
           // this._au.logout()
          }
      }
      ]},
      // {
      //     label: 'Navigate',
      //     items: [{
      //         label: 'Angular Website',
      //         icon: 'bi bi-box-arrow-up-right',
      //         url: 'http://angular.io'
      //     },
      //     {
      //         label: 'Router',
      //         icon: 'bi bi-upload'
      //     }
      // ]}
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
