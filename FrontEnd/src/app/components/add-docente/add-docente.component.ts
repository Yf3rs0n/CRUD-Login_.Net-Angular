import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private router: Router
    ) { 
    this.formDocente = this.fb.group({
      identificacion:['',Validators.required],
      tipoIdentificacion:['',Validators.required],
      nombres:['',Validators.required],
      apellidos:['',Validators.required],
      correoElectronico:['',Validators.required],
      telefonoCelular:['',Validators.required],
      numeroContrato:['',Validators.required],
      ciudadResidencia:['',Validators.required],
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
        this.router.navigate(['/docentes']);
      },
      error:(e)=>{}
      
    });
  }
}

