import { Component, OnInit } from '@angular/core';
import { APIGetOneService } from '../apiget-one.service';

@Component({
  selector: 'app-featured-books',
  imports: [],
  templateUrl: './featured-books.component.html',
  styleUrl: './featured-books.component.css',
})
export class FeaturedBooksComponent implements OnInit {
  book: any = {};
  book1: any = {};
  book2: any = {};
  book3: any = {};

  constructor(private APIGetOneService: APIGetOneService) {}

  ngOnInit(): void {
    this.APIGetOneService.getBook('67e6e780f3ee5d721bcbd75f').subscribe({
      next: (data) => {
        this.book = data;
      },
      error: (error) => {
        console.error('Failed to fetch book', error);
      },
    });
    this.APIGetOneService.getBook('67e6e780f3ee5d721bcbd76e').subscribe({
      next: (data1) => {
        this.book1 = data1;
      },
      error: (error) => {
        console.error('Failed to fetch book', error);
      }
    });
    this.APIGetOneService.getBook('67e6e780f3ee5d721bcbd784').subscribe({
      next: (data2) => {
        this.book2 = data2;
      },
      error: (error) => {
        console.error('Failed to fetch book', error);
      }
    });
    this.APIGetOneService.getBook('67e6e780f3ee5d721bcbd785').subscribe({
      next: (data3) => {
        this.book3 = data3;
      },
      error: (error) => {
        console.error('Failed to fetch book', error);
      }
    });
  }
}
