import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-personal-employer',
  standalone: true,
  templateUrl: './personal-employer.component.html',
  styleUrls: ['./personal-employer.component.scss'],
  imports: [HeaderComponent, FooterComponent],

})
export class PersonalEmployerComponent {
  // ...additional properties and methods
}
