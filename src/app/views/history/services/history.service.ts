import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private readonly URL = environment.api;

  constructor(private httpClient: HttpClient) { }

  getAllAbonadoHistory$(id_abonado:number): Observable<any> {
    return this.httpClient.get(`${this.URL}/historyByAbonado/${id_abonado}`)
  }

}
