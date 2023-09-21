import { Component, OnInit,ViewChild } from '@angular/core';
import { Docente } from 'src/app/models/docente.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DocentesService } from 'src/app/services/docentes.service';
import { NgToastService } from 'ng-angular-popup';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@Component({
  selector: 'app-docentes-list',
  templateUrl: './docentes-list.component.html',
  styleUrls: ['./docentes-list.component.css']
})
export class DocentesListComponent implements OnInit{
  
  // docentes: Docente[] = [];
  displayedColumns: string[] = ['actions','identificacion','nombreCompleto','correoElectronico','numeroContrato','escalafonTecnico'];
  dataDocente = new MatTableDataSource<Docente>();

  @ViewChild(MatPaginator) paginator!: MatPaginator ;

  constructor(private docentesService: DocentesService,private toast: NgToastService) { }

  applyFilter(event:Event){
    const filterValue =(event.target as HTMLInputElement).value;
    this.dataDocente.filter = filterValue.trim().toLowerCase();
  }
  
  showDocentes(): void {
    this.docentesService.getAllDocentes().subscribe({
      next:(data)=>{
        if(data.status){
          this.dataDocente.data = data.value;
        }
      },
      error:(e)=>{}
    });
  }
  ngOnInit(): void {
    this.showDocentes();
}
ngAfterViewInit(): void {
  this.dataDocente.paginator = this.paginator;
}

deleteDocente(identificacion:number){
  this.docentesService.deleteDocente(identificacion)
  .subscribe({
    next:(data)=>{
      this.toast.success({detail:'Success',summary:"Docente eliminado exitosamente",duration:3000});
      this.showDocentes();
    },
    error:(e)=>{}
  });
}
}
