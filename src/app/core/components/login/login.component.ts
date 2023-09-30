import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authServ: AuthenticationService,
    private utilServ: UtilsService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
  /**
   * @description:  navigate to home page after valid login credentials
   */
  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authServ.authenticateUser(this.loginForm.value)
        ? this.router.navigateByUrl('home')
        : this.utilServ.openSnackBar(
            'Please enter valid Username and Password',
            'close'
          );
    } else {
      this.utilServ.openSnackBar(
        'Please enter valid Username and Password!!!',
        'close'
      );
    }
  }
}
