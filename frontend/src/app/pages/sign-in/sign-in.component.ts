import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-sign-in', 
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers: []

})
export class SignInComponent {
  email: string = '';
  password: string = '';
  message: string = '';

  constructor(private http: HttpClient) { }

  onSubmit() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    this.http.post('/api/auth/login', { email: this.email, password: this.password }, { headers, responseType: 'text' as 'json' })
        .subscribe((response: any) => { 
            console.log("Response from backend:", response);
            this.message = response as string; 
        }, (error: any) => { 
            console.error("Error from backend:", error);
            this.message = 'Đăng nhập không thành công';
        });
  }
}
