import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';

import {MatIconModule} from '@angular/material/icon';

//- To work with material table
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AddDocenteComponent } from './components/docentes/add-docente/add-docente.component';
import { EditDocenteComponent } from './components/docentes/edit-docente/edit-docente.component';
import { DocentesListComponent } from './components/docentes/docentes-list/docentes-list.component';
import { LoginComponent } from './components/login/login.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgToastModule } from 'ng-angular-popup';


@NgModule({
  declarations: [
    DocentesListComponent,
    AddDocenteComponent,
    AppComponent,
    EditDocenteComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatIconModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatSnackBarModule,
    NgToastModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
