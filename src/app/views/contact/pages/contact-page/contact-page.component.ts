import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientModel } from '@core/models/cliente.model';
import { ClientService } from '@shared/services/client.service';
import { ContactService } from '@views/contact/services/contact.service';
import { CookieService } from 'ngx-cookie-service';
import { take } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {
  formContact: FormGroup = new FormGroup({});
  dataClient: ClientModel = {
    apellidos: "",
    autenticado: true,
    contrasena: "#####",
    correo_electronico: "ejm@aguapotable.com",
    direccion: "",
    estado: 1,
    fecha_nacimiento: new Date(),
    id: 1052,
    identificador: "",
    nombres: "",
    token: ""
  }
  identifier:string = this.cookie.get('userId')
  errorSend: boolean = false;

  constructor(
    private clientService: ClientService,
    private contactService: ContactService,
    private cookie: CookieService,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.loadDataAll()
  }

  async loadDataAll(): Promise<any> {
    this.clientService.getClienteByCI$(this.identifier).pipe(
      take(1)
    ).subscribe({
      next: (info) => {
        this.dataClient = info;
        this.initForm();
      },
      error: (error: any) => {
        console.log("ERROR: ", error);
        this.initForm();
      }
    });
  }

  initForm(): void {
    this.formContact = new FormGroup({
      apellidos: new FormControl(this.dataClient ? this.dataClient.apellidos : '', [
        Validators.required
      ]),
      nombres: new FormControl(this.dataClient ? this.dataClient.nombres : '', [
        Validators.required
      ]),
      direccion: new FormControl(this.dataClient ? this.dataClient.direccion : '', [
        Validators.required
      ]),
      correo_electronico: new FormControl(this.dataClient ? this.dataClient.correo_electronico : '', [
        Validators.required
      ]),
      asunto: new FormControl('', [
        Validators.required
      ]),
      mensaje: new FormControl('', [
        Validators.required
      ])
    });
  }

  sendMail(): void {
    const { asunto, mensaje } = this.formContact.value
    this.contactService.sendMail(this.identifier, asunto, mensaje)
      .subscribe((responseOk: { mensaje: any; identificador: any; enviado: any; }) => { //TODO: Cuando el usuario credenciales Correctas
        const {identificador, mensaje, enviado } = responseOk
        if(enviado){
          this.mostrarToast(mensaje);
          console.log('Correo enviado!', responseOk);
        }else{
          this.errorSend = true
          console.log('Ocurrio error con mail');
        }

      },
        () => {//TODO error 400>=
          this.errorSend = true
          console.log('Ocurrio error con mail');
        })

  }
  // Método para mostrar el toast
  mostrarToast(mensaje: string) {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 3000 // Duración del toast en milisegundos
    });
  }
}
