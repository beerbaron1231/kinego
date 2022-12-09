import { Injectable, NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';
@Injectable({ providedIn: 'root' })
export class MyGuardWithDependency implements CanActivate {
  constructor() {}

  canActivate() {
    return true
  }
}
const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'inicio'},
  {path:'inicio',loadComponent:() => import('./component/inicio/inicio.component').then(m=>m.InicioComponent),canActivate:[MyGuardWithDependency]},
  {path:'detalle',loadComponent:() => import('./component/detalle-cooperadores/detalle-cooperadores.component').then(m=>m.DetalleCooperadoresComponent),canActivate:[MyGuardWithDependency]},
  {path:'ventas',loadComponent:() => import('./component/ventas/ventas.component').then(m=>m.VentasComponent),canActivate:[MyGuardWithDependency]},
  {path:'usuarios',loadComponent:() => import('./component/usuarios/usuarios.component').then(m=>m.UsuariosComponent),canActivate:[MyGuardWithDependency]},
  
  //{path:'test', component: Test1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
