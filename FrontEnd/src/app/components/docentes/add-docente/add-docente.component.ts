import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Docente } from 'src/app/models/docente.model';
import { DocentesService } from 'src/app/services/docentes.service';

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
    private router: Router
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
  showAlert(msg:string,title:string,){
    this._snackBar.open(msg,title, {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }
  // addDocente(){
  //   this.docentesService.addDocente(this.formDocente.value)
  //   .subscribe({
  //     next:(data)=>{
  //       if(data.status){
  //         this.showAlert("Docente agregado exitosamente","success");
  //         console.log(data);
  //         this.router.navigate(['/docentes']);
  //       }else{
  //         this.showAlert("Error al agregar el docente","error");
  //       }

  //     }
  //   });
  // }
  addDocente(){
    this.docentesService.addDocente(this.formDocente.value)
    .subscribe({
      next:(data)=>{
        console.log(data);
        this.router.navigate(['/docentes']);
      },
      error:(e)=>{
        this.showAlert("Error al agregar los datos del docente","error");
      }
      
    });
  }
}

