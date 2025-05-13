import { Component, OnInit } from '@angular/core';
import { GetAllBooksService } from '../get-all-books.service';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
} from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-books',
  imports: [ReactiveFormsModule],
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css'],
})
export class AllBooksComponent implements OnInit {
  books: any[] = [];
  filteredBooks: any[] = [];
  searchControl = new FormControl('');

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
    this.searchControl.valueChanges
          .pipe(
            startWith(''),
            debounceTime(100),
            distinctUntilChanged(),
            map((searchTerm) => (searchTerm ?? '').toLowerCase())
          )
          .subscribe((searchTerm) => {
            this.filteredBooks = this.books.filter((book) =>
              book.title.toLowerCase().includes(searchTerm)
            );
          });
  }
}
