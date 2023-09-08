import { Component } from '@angular/core';
import { AttachmentService } from './attachment.service';

@Component({
  selector: 'app-attachment',
  templateUrl: './attachment.component.html',
  styleUrls: ['./attachment.component.scss']
})
export class AttachmentComponent {
  selectedFile: File | null = null;
  emailId= '';
  recieptiantId ='';
  constructor(private attach: AttachmentService) {
    
  }
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadFile(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      // send respctivbe fiels to api
      this.attach.uploadFile(formData).subscribe(v => {
        // suucess 
      }, err => { 
        // error
      })
    }
  }
}
