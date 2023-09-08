import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttachmentService {
  constructor(private http: HttpClient) { }

  uploadFile(formData: any) {
    return this.http.post('your-api-endpoint', formData, {
        headers: new HttpHeaders().set('Content-Type', 'multiform')
      })}
}
