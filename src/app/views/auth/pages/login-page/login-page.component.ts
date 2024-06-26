import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@views/auth/services/auth.service';
import { NgxCaptchaModule } from 'ngx-captcha';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    NgxCaptchaModule,
    FormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  errorSession: boolean = false;
  formLogin: FormGroup = new FormGroup({});
  recaptchaResponse: string='';
  public captchaResolved : boolean = true;

  constructor(
    private authService: AuthService,
    private cookie: CookieService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
    ) {

    }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        identifier: new FormControl('', [
          Validators.required
        ]),
        password: new FormControl('',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(15)
          ]),
        recaptcha: new FormControl('', [Validators.required])
      }
    )
  }

  sendLogin(): void {
    const { identifier, password } = this.formLogin.value
    this.authService.sendCredentials(identifier, password)
      .subscribe((responseOk: { token: any; identificador: any; autenticado: any; }) => { //TODO: Cuando el usuario credenciales Correctas
        const { token, identificador, autenticado } = responseOk
        if(autenticado){
          console.log('Session iniciada correcta', responseOk);
          this.errorSession = false
          //guardo la cookie para la sesion
          this.cookie.set('token', token, 4, '/') // 4 dias / para toda la app
          this.cookie.set('userId', identificador);
          this.router.navigate(['/', 'home'])
        }else{
          this.errorSession = true
          console.log('Ocurrio error con auth');
        }

      },
        () => {//TODO error 400>=
          this.errorSession = true
          console.log('Ocurrio error con auth');
        })

  }

  handleCaptchaResponse(captchaResponse: any): void {
    this.recaptchaResponse = captchaResponse;
    this.captchaResolved = (this.recaptchaResponse && this.recaptchaResponse.length > 0) ? false : true
  }

  // Verifica si estamos en el navegador antes de utilizar ngx-recaptcha2
  shouldUseRecaptcha(): boolean {
    return isPlatformBrowser(this.platformId);
  }

}
