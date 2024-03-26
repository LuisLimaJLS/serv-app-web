import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private readonly URL = environment.api
  constructor(private httpClient: HttpClient) { }

  sendMail(identifier: string, subject: string, message:string ): Observable<any> {
    const body = {
      identifier,
      subject,
      message
    }
    return this.httpClient.post(`${this.URL}/mail/sendMail`, body)
  }
}
