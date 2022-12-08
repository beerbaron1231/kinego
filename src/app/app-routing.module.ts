import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test1Component} from './component/test1/test1.component'
const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'test'},
  {path:'test',loadComponent:() => import('./component/test1/test1.component').then(m=>m.Test1Component)},
  {path:'table',loadComponent:() => import('./component/table/table.component').then(m=>m.TableComponent)}
  //{path:'test', component: Test1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
