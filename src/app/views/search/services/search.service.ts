import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly URL = environment.api;
  constructor(private httpClient: HttpClient) { }

  getAllSearchMin$(ci:string, src:string ): Observable<any> {
    return this.httpClient.get(`${this.URL}/SearchByCIMin/${ci}/${src}`)
  }
  getAllSearchFull$(ci:string, src:string ): Observable<any> {
    return this.httpClient.get(`${this.URL}/SearchByCIFull/${ci}/${src}`)
  }

}
