import { Component, OnInit } from '@angular/core';
import { GetAllBooksService } from '../get-all-books.service';

@Component({
  selector: 'app-all-books',
  imports: [],
  templateUrl: './all-books.component.html',
  styleUrl: './all-books.component.css'
})
export class AllBooksComponent implements OnInit{
  books: any[] = [];

  constructor(private getAllBooksService: GetAllBooksService) {}

  ngOnInit(): void {
    this.getAllBooksService.getAll().subscribe({
      next: (data) => {
        this.books = data;
      }, 
      error: (error) => {
        console.error('Failed to fetch book', error);
      }
    });
  }

}
