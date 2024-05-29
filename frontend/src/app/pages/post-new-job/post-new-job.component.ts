import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-personal-jobseeker',
  standalone: true,
  templateUrl: './post-new-job.component.html',
  styleUrls: ['./post-new-job.component.scss'],
  imports: [HeaderComponent, FooterComponent],

})
export class PostNewJobComponent {
  // ...additional properties and methods
}
