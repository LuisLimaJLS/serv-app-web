import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlertService {


  private readonly URL = environment.api;

  constructor(private httpClient: HttpClient) { }

  getMaxEmsionAlertByCi$(ci: string, nro_meses: string): Observable<any> {
    return this.httpClient.get(`${this.URL}/maxEmsionAlertByCi/${ci}/${nro_meses}`)
  }
}
