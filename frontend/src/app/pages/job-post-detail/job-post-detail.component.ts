import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-job-post-detail',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './job-post-detail.component.html',
  styleUrl: './job-post-detail.component.scss'
})
export class JobPostDetailComponent {

}
