import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'bi bi-eye-slash';


  hideShowPassword() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = 'bi bi-eye' : this.eyeIcon = 'bi bi-eye-slash';
    this.isText ? this.type = 'text' : this.type = 'password';
    
  }

}
