import { Router } from '@angular/router';
import { tap, map } from 'rxjs/operators';
import { LoginService } from '../services/login.service';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../../../shared/public_api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'fe-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(
      private readonly router: Router,
      private readonly formBuilder: FormBuilder,
      private readonly loginService: LoginService,
      private readonly localStorageService: LocalStorageService) {

  }

  public ngOnInit() {
    this.formGroup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public onFormSubmit() {
    if(this.formGroup.invalid) {
      return;
    }
    const { username, password } = this.formGroup.value;
    this.loginService.login(username, password)
      .pipe(map(data => data.token))
      .pipe(tap(token => this.localStorageService.setItem('token', token)))
      .pipe(tap(() => {
        this.router.navigate(['/explorer']);
      }))
      .subscribe();
  }

}
