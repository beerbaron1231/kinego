import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';

import { AppRoutingModule, MyGuardWithDependency } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from 'primeng/menu';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { AuthServiceService } from './services/auth-service.service';

import {ToastModule} from 'primeng/toast';
import {MessageModule} from 'primeng/message';
@NgModule({
  declarations: [
    AppComponent,SidebarComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    FormsModule,
    MenuModule,
    ReactiveFormsModule,
    HttpClientModule,
    MessageModule,
    ToastModule
  ],
  providers: [MyGuardWithDependency, AuthServiceService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
