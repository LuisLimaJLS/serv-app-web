import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { AbonadoModel } from '@core/models/abonado.model';
import { EmisionModel } from '@core/models/emision.model';

@Injectable({
  providedIn: 'root'
})
export class AbonadoService {
  private readonly URL = environment.api;

  dataAbonados$:Observable<AbonadoModel[]> = of([])
  dataEmisiones$:Observable<EmisionModel[]> = of([])

  constructor(private httpClient: HttpClient) { }

  getAllAbonados$(identifier: string, nro_meses: string): Observable<any> {
    return this.httpClient.get(`${this.URL}/abonadosByCI/${identifier}/${nro_meses}`)
  }

  getAllEmisions$(identifier: string): Observable<any> {
    return this.httpClient.get(`${this.URL}/emisionsByAbonado/115147/6`)
  }
}
