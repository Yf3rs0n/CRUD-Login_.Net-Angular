import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Docente } from '../models/docente.model';
import { ResponseApi } from '../models/response-api';
import {JwtHelperService} from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userPayload:any;
  private endpoint:string = environment.endpoint;
  private myApiUrl:string = this.endpoint+"api/Login";

  constructor(private http: HttpClient) { 
    this.userPayload = this.decodeToken();
  }

  login(login: any) {
    return this.http.post<any>(this.myApiUrl+"/authenticate",login);
  }

  Crudtoken(tokenValue: string) {
    localStorage.setItem('token', tokenValue);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  // isLoggedIn(): boolean {
  //   return !!localStorage.getItem('token')
  // }
  decodeToken(){
    const JwtHelper = new JwtHelperService();
    const token = this.getToken()!;
    // console.log(JwtHelper.decodeToken(token));
    return JwtHelper.decodeToken(token);
  }
  getUsuario(){
    if (this.userPayload) {
      return this.userPayload.name;
    }
    return null
  }
}
