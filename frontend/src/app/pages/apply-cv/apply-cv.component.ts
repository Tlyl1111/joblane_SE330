import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-cv',
  standalone: true,
  templateUrl: './apply-cv.component.html',
  styleUrl: './apply-cv.component.scss',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule, HeaderComponent, FooterComponent],
})
export class ApplyCVComponent {
  applyForm: FormGroup;
  message: string = '';
  cv: string | ArrayBuffer = 'assets/img/Avatar-largesize.jpg';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.applyForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      coverLetter: ['', Validators.required],
      cv: [''],
      
    });
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) { // Thêm điều kiện kiểm tra input.files
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.cv = reader.result as string;
        this.applyForm.patchValue({ cv: this.cv });
      };
      reader.readAsDataURL(file);
    }
  }
 

  onSubmit() {
    if (this.applyForm.valid) {
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      console.log('Submitting form:', this.applyForm.value);
      const formData = this.applyForm.value;
      const userId = localStorage.getItem('userId');
      const jobseekerId = localStorage.getItem('jobseekerId');
      this.http.post('http://localhost:8080/api/application/apply', { formData, userId, jobseekerId} , { headers, responseType: 'text' as 'json' })
        .subscribe(
          (response: any) => {
            
            const parsedResponse = JSON.parse(response);
            console.log('Submitting form:', response);

            this.router.navigate(['/home']);
          },
          (error: any) => {
            console.error("Error from backend:", error);
            this.message = 'Ứng tuyển không thành công';
          }
        );
    }
  }
}
