import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Docente } from 'src/app/models/docente.model';
import { DocentesService } from 'src/app/services/docentes.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-add-docente',
  templateUrl: './add-docente.component.html',
  styleUrls: ['./add-docente.component.css']
})
export class AddDocenteComponent implements OnInit{
  formDocente: FormGroup;
  listDocente: Docente[] = [];

  constructor(
    private docentesService: DocentesService,
    private fb:FormBuilder,
    private _snackBar:MatSnackBar,
    private router: Router,
    private toast: NgToastService
    ) { 
    this.formDocente = this.fb.group({
      identificacion:['',Validators.required],
      tipoIdentificacion:['',Validators.required],
      nombres:['',Validators.required],
      apellidos:['',Validators.required],
      correoElectronico:['',Validators.required,Validators.email],
      telefonoCelular:['',Validators.required],
      numeroContrato:['',Validators.required],
      ciudadResidencia:'',
      escalafonTecnico:['',Validators.required],
      escalafonExtension:['',Validators.required]
      });
    }
  ngOnInit(): void {
  }
  addDocente(){
    this.docentesService.addDocente(this.formDocente.value)
    .subscribe({
      next:(data)=>{
        console.log(data);
        this.toast.success({detail:'Success',summary:"Docente agregado exitosamente",duration:3000});
        this.router.navigate(['/docentes']);
      },
      error:(e)=>{
        this.toast.error({detail:'Error',summary:'Error, verifique los datos ingresados'});
      }
    });
  }
}

