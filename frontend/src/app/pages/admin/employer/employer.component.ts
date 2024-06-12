import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../sidebar/sidebar.component';

export interface Employer {
  name: string;
  email: string;
  phone: string;
  registryTime: string;
  registryDate: string;
}

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SidebarComponent
  ]
})
export class EmployerComponent implements OnInit {
  employers: Employer[] = [];
  paginatedEmployers: Employer[] = [];
  searchTerm: string = '';
  rowsPerPage: number = 10;
  currentPage: number = 1;
  totalPages: number = 1;
  rowsOptions: number[] = [1, 2, 3, 5, 10];

  ngOnInit() {
    // Giả lập dữ liệu employers
    this.employers = [
      { name: 'Selena Gomez', email: 'abcxyz@gmail.com', phone: '097xxxxxxx', registryTime: '21:32', registryDate: '26/03/2023' },
      { name: 'Selena Gomez', email: 'abcxyz@gmail.com', phone: '097xxxxxxx', registryTime: '21:32', registryDate: '26/03/2023' },
      // Thêm các dữ liệu khác nếu cần
    ];
    this.updatePagination();
  }

  onRowsPerPageChange() {
    this.currentPage = 1;
    this.updatePagination();
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.employers.length / this.rowsPerPage);
    this.paginate();
  }

  paginate() {
    const start = (this.currentPage - 1) * this.rowsPerPage;
    const end = start + this.rowsPerPage;
    this.paginatedEmployers = this.employers.slice(start, end);
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
