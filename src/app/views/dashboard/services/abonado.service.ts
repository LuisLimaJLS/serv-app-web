import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, of } from 'rxjs';
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

  getAllEmisionsByAbonado$(id_abonado: number, nro_meses: string): Observable<any> {
    return this.httpClient.get(`${this.URL}/emisionsByAbonado/${id_abonado}/${nro_meses}`)
  }

  maxEmisionsByAbonado$(id_abonado: number, nro_meses: string): Observable<any> {
    return this.httpClient.get(`${this.URL}/maxEmisionsByAbonado/${id_abonado}/${nro_meses}`)
  }

  getDetailValuesByAbonado$(id_abonado: number, nro_meses: string): Observable<any> {
    return this.httpClient.get(`${this.URL}/getDetailValuesByAbonado/${id_abonado}/${nro_meses}`)
  }

  getDataByEmission$(id_emision: number, nro_meses: string): Observable<any> {
    return this.httpClient.get(`${this.URL}/dataByEmission/${id_emision}/${nro_meses}`)
  }

}
