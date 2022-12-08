import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'inicio'},
  {path:'inicio',loadComponent:() => import('./component/inicio/inicio.component').then(m=>m.InicioComponent)},
  {path:'detalle',loadComponent:() => import('./component/detalle-cooperadores/detalle-cooperadores.component').then(m=>m.DetalleCooperadoresComponent)},
  {path:'ventas',loadComponent:() => import('./component/ventas/ventas.component').then(m=>m.VentasComponent)},
  {path:'usuarios',loadComponent:() => import('./component/usuarios/usuarios.component').then(m=>m.UsuariosComponent)},
  
  //{path:'test', component: Test1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
