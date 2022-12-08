import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Angular15';
  latoggle:boolean=false
 
  sideBarToogle(){
    this.latoggle =!this.latoggle
    console.log(this.latoggle)
  }
}
