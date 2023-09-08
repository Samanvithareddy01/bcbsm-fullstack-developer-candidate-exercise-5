import { Component } from '@angular/core';
import { AttachmentService } from './attachment.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-attachment',
  templateUrl: './attachment.component.html',
  styleUrls: ['./attachment.component.scss']
})
export class AttachmentComponent {
  selectedFile: File | null = null;
  emailId= '';
  recieptiantId ='';
  constructor(private attach: AttachmentService,
    private as: AuthService) {
    
  }
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadFile(): void {
    if (this.selectedFile) {
      const params = {
        fromEmailId: this.emailId,
        recipientEmailId: this.recieptiantId,
        uploadUser: this.as.userInfo,
        formData: new FormData()
      }
      params.formData.append('file', this.selectedFile);

      // send respctivbe fiels to api
      this.attach.uploadFile(params).subscribe(v => {
        // suucess 
      }, err => { 
        // error
      })
    }
  }
}
