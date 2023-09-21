import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Docente } from 'src/app/models/docente.model';
import { ResponseApi } from 'src/app/models/response-api';
import { DocentesService } from 'src/app/services/docentes.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-edit-docente',
  templateUrl: './edit-docente.component.html',
  styleUrls: ['./edit-docente.component.css']
})
export class EditDocenteComponent implements OnInit{
  formDocente: FormGroup;

  docenteDetails: Docente = {
    identificacion:0,
    tipoIdentificacion:'',
    nombres:'',
    apellidos:'',
    correoElectronico:'',
    telefonoCelular:'',
    numeroContrato:'',
    ciudadResidencia:'',
    escalafonTecnico:'',
    escalafonExtension:''
    };

  constructor(
    private route: ActivatedRoute,
    private toast: NgToastService,
    private router: Router,
    private fb:FormBuilder,
    private docentesService: DocentesService){
      this.formDocente = this.fb.group({
        identificacion:['',Validators.required],
        tipoIdentificacion:['',Validators.required],
        nombres:['',Validators.required],
        apellidos:['',Validators.required],
        correoElectronico:['',Validators.required,Validators.email],
        telefonoCelular:['',Validators.required],
        numeroContrato:['',Validators.required,Validators.min(1)],
        ciudadResidencia:['',Validators.required],
        escalafonTecnico:['',Validators.required],
        escalafonExtension:['',Validators.required]
        });
    }

    ngOnInit(): void {
      this.route.paramMap.subscribe({
        next:(params)=>{
          const identificacion = params.get('identificacion');
          if (identificacion) {
            this.docentesService.getDocente(identificacion)
            .subscribe({
              next:(response : ResponseApi)=>{
                this.docenteDetails = response.value;
                this.formDocente.patchValue(this.docenteDetails);
              } 
            })
          }
        }
      })
    }

    updateDocente(){
      this.docentesService.updateDocente(this.formDocente.value)
      .subscribe({
        next:(data)=>{
          this.toast.success({detail:'Success',summary:"Docente actualizado exitosamente",duration:3000});
          this.router.navigate(['/docentes']);
        },
        error:(e)=>{
          this.toast.error({detail:'Error',summary:'Error al actualizar el docente'});
        }
      });
    }
}  


