import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-sign-in-1',
  standalone: true,
  templateUrl: './sign-in-1.component.html',
  styleUrl: './sign-in-1.component.scss',
  imports: [HeaderComponent, FooterComponent],

})
export class SignIn1Component {

}
