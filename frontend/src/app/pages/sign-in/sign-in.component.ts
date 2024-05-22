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

@Component({
  selector: 'app-sign-in', 
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],

})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  onLogin() {
    const email = this.loginForm.get('email')!.value;
    const password = this.loginForm.get('password')!.value;
    if (email === 'abc@gmail.com' && password === 'abc') {
      alert('Đăng nhập thành công!');
    } else {
      alert('Email hoặc mật khẩu không chính xác.');
    }
  }
}
