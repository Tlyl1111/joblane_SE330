import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-sign-in-2',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './sign-in-2.component.html',
  styleUrl: './sign-in-2.component.scss'
})
export class SignIn2Component {

}
