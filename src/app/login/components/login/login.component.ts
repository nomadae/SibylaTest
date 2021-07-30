import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router, Routes} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public hide = true;
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  get_username(): AbstractControl {
    return this.loginForm.controls.username;
  }
  get_password(): AbstractControl {
    return this.loginForm.controls.password;
  }
  submit() {
    if (this.loginForm.valid) {
      const controls = this.loginForm.controls;
      console.log('User: ' + controls.username.value);
      console.log('Password: ' + controls.password.value);
      this.router.navigate(['view']).then(r => null);
    }
  }
}
