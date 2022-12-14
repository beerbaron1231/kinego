import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyGuardWithDependency } from 'src/app/app-routing.module';

@Component({
  selector: 'app-sidebar',
  
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() toggleSideBarFroMe: EventEmitter<any> = new EventEmitter();
latoggle:boolean=false
listItemHovered:boolean=false
constructor(public MyGuardWithDependenx:MyGuardWithDependency){}
toggle(){
  this.latoggle =!this.latoggle
  this.toggleSideBarFroMe.emit();
}

hoverListItem() {
  this.toggleSideBarFroMe.emit();
  this.listItemHovered = !this.listItemHovered;
  
}
}
