import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-personal-jobseeker',
  standalone: true,
  templateUrl: './personal-jobseeker.component.html',
  styleUrls: ['./personal-jobseeker.component.scss'],
  imports: [HeaderComponent, FooterComponent],

})
export class PersonalJobSeekerComponent {
  // ...additional properties and methods
}
