import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  constructor(
    private fb: FormBuilder,
    private authService: AuthServiceService,
    private router: Router
  ) {

  }

  login() {
    if (this.form.valid) {
      this.router.navigateByUrl('/inicio');
    }
    // const val = this.form.value;
    // if (val.email && val.password) {
    //     this.authService.login(val.email,val.password)
    //     if(this.authService.isLoggedIn()){
    //       console.log('apsapsdpasd')
    //       this.router.navigateByUrl('/inicio');
    //     }

    // }
  }
}
