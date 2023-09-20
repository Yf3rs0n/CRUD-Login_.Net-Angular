import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usuario$ = new BehaviorSubject<string>("") ;

  constructor() { }

  public getUsuario(){
    return this.usuario$.asObservable();
  }
  public setUsuario(usuario: string){
    this.usuario$.next(usuario);
  }
}
