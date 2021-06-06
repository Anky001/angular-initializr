import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';
import { ErrorhandlingService } from '@core/services/error-handling/error-handling.service';
import { LoginComponent } from './login.component';

let authServiceMock: AuthService;
let errorhandlerServiceMock: ErrorhandlingService;
let formBuilderMock: FormBuilder = new FormBuilder();
let routerMock: Router;

describe('LoginComponent', () => {
  let component: LoginComponent;

  beforeEach(() => {
    component = new LoginComponent(
      authServiceMock,
      errorhandlerServiceMock,
      formBuilderMock,
      routerMock
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize login form', () => {
    component.ngOnInit();
    expect(component.loginForm.get('username').value).not.toBeNull();
    expect(component.loginForm.get('password').value).not.toBeNull();
  });

  it('should validate login form', () => {
    component.loginForm.patchValue({
      username: null,
      password: null,
    });
    expect(component.loginForm.valid).toBeFalsy();
  });
});
