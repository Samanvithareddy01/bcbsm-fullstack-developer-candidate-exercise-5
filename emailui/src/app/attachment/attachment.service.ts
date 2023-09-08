import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttachmentService {
  constructor(private http: HttpClient) { }

  uploadFile(formData: any) {
    return this.http.post('http://localhost:8080/email/send', formData, {
        headers: 
        { 'Content-Type': 'multiform',
        'Cookie': 'JSESSIONID=5DD47D0C2D3030B63A3C773D7DB38C29'
      }})}
}
