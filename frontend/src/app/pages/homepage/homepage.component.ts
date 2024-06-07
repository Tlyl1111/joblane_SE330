import { Component, AfterViewInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { NgFor } from '@angular/common';
import jQuery from 'jquery';

const $ = jQuery;

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, NgFor],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent{
  
}