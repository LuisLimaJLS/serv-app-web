import { Injectable } from '@angular/core';
import { AbonadoModel } from '@core/models/abonado.model';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private readonly URL = environment.api;

  constructor(private httpClient: HttpClient) { }

  getAllAbonados$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/abonadosByCI/2506716965001`)
  }

}
