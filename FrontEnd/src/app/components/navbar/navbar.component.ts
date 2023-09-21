import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public usuario: string = '';
  constructor(private router: Router, private auth: AuthService, private userService: UserService,private toast: NgToastService) {
  }

  ngOnInit(){
    this.userService.getUsuario()
    .subscribe(val=> {
      let user = this.auth.getUsuario();
      this.usuario = val || user;
    })
}
logout() {
  const confimation = confirm('¿Desea cerrar sesión?');
  if (confimation) {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
}