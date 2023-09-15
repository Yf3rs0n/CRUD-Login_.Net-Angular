import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Docente } from '../models/docente.model';
import { ResponseApi } from '../models/response-api';



@Injectable({
  providedIn: 'root'
})
export class DocentesService {
  add(model: Docente) {
    throw new Error('Method not implemented.');
  }

  private endpoint:string = environment.endpoint;
  private myApiUrl:string = this.endpoint+"api/Docente";

  constructor(private http: HttpClient) { }

  getAllDocentes(): Observable<ResponseApi>{
    return this.http.get<ResponseApi>(this.myApiUrl);
  }
  addDocente(addDocenteRequest:Docente):Observable<ResponseApi>{
    return this.http.post<ResponseApi>(this.myApiUrl,addDocenteRequest);
  }
  getDocente(identificacion:string):Observable<ResponseApi>{
    return this.http.get<ResponseApi>(this.myApiUrl+'/'+identificacion);
  }
  updateDocente(request:Docente):Observable<ResponseApi>{
    return this.http.put<ResponseApi>(this.myApiUrl,request);
  }
}

