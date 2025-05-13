import { Component, OnInit } from '@angular/core';
import { GetAllBooksService } from '../get-all-books.service';
import { SearchButtonComponent } from '../search-button/search-button.component';

@Component({
  selector: 'app-all-books',
  imports: [SearchButtonComponent],
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css'],
})
export class AllBooksComponent implements OnInit {
  books: any[] = [];
  filteredBooks: any[] = [];

  constructor(private getAllBooksService: GetAllBooksService) {}

  ngOnInit(): void {
    this.getAllBooksService.getAll().subscribe({
      next: (data) => {
        this.books = data;
        this.filteredBooks = data;
      },
      error: (error) => {
        console.error('Failed to fetch books', error);
      },
    });
  }
}
