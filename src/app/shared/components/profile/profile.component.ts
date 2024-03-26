import { Component } from '@angular/core';
import { ClientModel } from '@core/models/cliente.model';
import { ClientService } from '@shared/services/client.service';
import { CookieService } from 'ngx-cookie-service';
import { take } from 'rxjs';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
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

  constructor(
    private clientService: ClientService,
    private cookie: CookieService
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
        //this.initForm();
      },
      error: (error: any) => {
        console.log("ERROR: ", error);
        //this.initForm();
      }
    });
  }

}
