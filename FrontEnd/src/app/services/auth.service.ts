import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Docente } from '../models/docente.model';
import { ResponseApi } from '../models/response-api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private endpoint:string = environment.endpoint;
  private myApiUrl:string = this.endpoint+"api/Login";

  constructor(private http: HttpClient) { }

  login(login: any) {
    return this.http.post<ResponseApi>(this.myApiUrl+"/authenticate",login);
  }
}
