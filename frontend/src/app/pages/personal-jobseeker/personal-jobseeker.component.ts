import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-personal-jobseeker',
  standalone: true,
  templateUrl: './personal-jobseeker.component.html',
  styleUrls: ['./personal-jobseeker.component.scss'],
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule, HeaderComponent, FooterComponent],

})

export class PersonalJobSeekerComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      birthday: ['', Validators.required],
      biography: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const userName = localStorage.getItem('userName');
    const userEmail = localStorage.getItem('userEmail');
    const jobseekerId = localStorage.getItem('jobseekerId');
    const userId = localStorage.getItem('userId');

    if (userName) {
      const [firstName, lastName] = userName.split(' ');
      this.profileForm.patchValue({
        firstName: firstName || '',
        lastName: lastName || ''
      });
    }

    if (userEmail) {
      this.profileForm.patchValue({
        email: userEmail
      });
    }
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      const formData = this.profileForm.value;
      const jobseekerId = localStorage.getItem('jobseekerId');
      const userId = localStorage.getItem('userId');
      console.log('form data: ', formData);
  
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
  
      this.http.post<{ message?: string, error?: string }>('/api/updateProfile', { formData, jobseekerId, userId }, { headers }).subscribe(response => {
        if (response.message) {
          console.log('Profile updated successfully', response.message);
          this.router.navigate(['/sign-in']);
          // Handle successful response
        }
        if (response.error) {
          console.error('Error updating profile', response.error);
          // Handle error response
        }
      }, error => {
        console.error('Error updating profile', error);
      });
    }
  }
}