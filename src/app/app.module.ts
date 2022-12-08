import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [
    AppComponent,SidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    FormsModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
