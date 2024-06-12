import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FormsModule } from '@angular/forms'; 

export interface JobSeeker {
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-job-seekers',
  templateUrl: './job-seeker.component.html',
  styleUrls: ['./job-seeker.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    FormsModule
  ]
})
export class JobSeekerComponent implements OnInit {
  jobSeekers: JobSeeker[] = [];
  paginatedJobSeekers: JobSeeker[] = [];
  searchTerm: string = '';
  rowsPerPage: number = 10;
  currentPage: number = 1;
  totalPages: number = 1;
  rowsOptions: number[] = [1, 2, 3, 5, 10];

  ngOnInit() {
    // Giả lập dữ liệu job seekers
    this.jobSeekers = [
      { name: 'John Doe', email: 'john.doe@example.com', phone: '+1234567890' },
      { name: 'Jane Smith', email: 'jane.smith@example.com', phone: '+0987654321' },
      // Thêm các dữ liệu khác nếu cần
    ];
    this.updatePagination();
  }

  onRowsPerPageChange() {
    this.currentPage = 1;
    this.updatePagination();
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.jobSeekers.length / this.rowsPerPage);
    this.paginate();
  }

  paginate() {
    const start = (this.currentPage - 1) * this.rowsPerPage;
    const end = start + this.rowsPerPage;
    this.paginatedJobSeekers = this.jobSeekers.slice(start, end);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginate();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginate();
    }
  }
}
