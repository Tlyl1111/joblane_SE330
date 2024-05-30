import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-2',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './sign-in-2.component.html',
  styleUrl: './sign-in-2.component.scss'
})
export class SignIn2Component {
  signupForm: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      agree: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      this.http.post('/api/auth/sign-up', this.signupForm.value, { headers, responseType: 'text' as 'json' })
        .subscribe(
          (response: any) => {
            console.log("Response from backend:", response);
            this.message = response as string;
            this.router.navigate(['/sign-in-1']);
          },
          (error: any) => {
            console.error("Error from backend:", error);
            this.message = 'Đăng ký không thành công';
          }
        );
    }
  }
}
