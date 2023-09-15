import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocentesListComponent } from './components/docentes/docentes-list/docentes-list.component';
import { AddDocenteComponent } from './components/add-docente/add-docente.component';
import { EditDocenteComponent } from './components/edit-docente/edit-docente.component';

const routes: Routes = [
  {
    path: 'docentes',
    component: DocentesListComponent
  },
  {
    path: 'docentes/add',
    component: AddDocenteComponent
  },
  {
    path: 'docentes/edit/:identificacion',
    component: EditDocenteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
