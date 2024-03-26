import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private readonly URL = environment.api;

  constructor(private httpClient: HttpClient) { }

  getClienteByCI$(ci: string): Observable<any> {
    return this.httpClient.get(`${this.URL}/clienteByCI/${ci}`)
  }
}
