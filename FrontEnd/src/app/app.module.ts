import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocentesListComponent } from './components/docentes/docentes-list/docentes-list.component';


//3.- To work with material table
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddDocenteComponent } from './components/add-docente/add-docente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditDocenteComponent } from './components/edit-docente/edit-docente.component';



@NgModule({
  declarations: [
    DocentesListComponent,
    AddDocenteComponent,
    AppComponent,
    EditDocenteComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
