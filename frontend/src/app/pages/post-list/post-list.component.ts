import { Component, AfterViewInit, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { NgFor } from '@angular/common';
import jQuery from 'jquery';
import { HttpClient, HttpClientModule } from '@angular/common/http';

declare var $: any;

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, NgFor, HttpClientModule],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, AfterViewInit {
  jobPosts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('/api/jobposts').subscribe(data => {
      console.log('Job posts data:', data); // Log dữ liệu nhận được
      this.jobPosts = data;
      setTimeout(() => {
        this.initSlickCarousel('.post-list', {
          dots: true,
          infinite: true,
          speed: 300,
          rows: 5,
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '.slick-prev',
          nextArrow: '.slick-next'
        });
      }, 100);
    }, error => {
      console.error('Error fetching job posts', error);
    });
  }
  

  ngAfterViewInit() {
    this.initSlickCarousel('.post-list', {
      dots: true,
      infinite: true,
      speed: 300,
      rows: 5,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '.slick-prev',
      nextArrow: '.slick-next'
    });
  }

  private initSlickCarousel(selector: string, options: any) {
    if (typeof window !== 'undefined') {
      import('slick-carousel').then(() => {
        $(selector).slick(options);
      }).catch(error => console.error('Error loading slick-carousel:', error));
    }
  }
}