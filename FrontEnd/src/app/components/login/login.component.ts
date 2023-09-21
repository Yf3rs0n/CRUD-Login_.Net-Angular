import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'bi bi-eye-slash';
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private toast: NgToastService
  ) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      usuario:['', [Validators.required]],
      contraseña:['', [Validators.required]]
    })
  }


  hideShowPassword() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = 'bi bi-eye' : this.eyeIcon = 'bi bi-eye-slash';
    this.isText ? this.type = 'text' : this.type = 'password';
    
  }

  onLogin() {
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          this.loginForm.reset();
          this.auth.Crudtoken(res.token);
          this.toast.success({detail:'Success',summary:"Bienvenido",duration:3000});
          this.router.navigate(['docentes']);
        },
        error:(e)=>{
        }
      })
    }else{
      this.toast.error({detail:'Error',summary:'Verifique los datos ingresados'});
    }
  }
}
