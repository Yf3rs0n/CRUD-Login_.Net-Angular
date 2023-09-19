import { Component } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
    private router: Router
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
      console.log(this.loginForm.value);
      this.auth.login(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          alert(res.msg);
          this.loginForm.reset();
          this.router.navigate(['/docentes']);
        },
        error:(e)=>{
          alert(e?.error.msg);
        }
      })
    }else{
      console.log('Formulario invalido');
    }
  }
}
