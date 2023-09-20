import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocentesListComponent } from './components/docentes/docentes-list/docentes-list.component';
import { AddDocenteComponent } from './components/docentes/add-docente/add-docente.component';
import { EditDocenteComponent } from './components/docentes/edit-docente/edit-docente.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'docentes',
    component: DocentesListComponent, canActivate:[authGuard]
  },
  {
    path: 'docentes/add',
    component: AddDocenteComponent, canActivate:[authGuard]
  },
  {
    path: 'docentes/edit/:identificacion',
    component: EditDocenteComponent, canActivate:[authGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
