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
  selector: 'app-search-button',
  imports: [ReactiveFormsModule],
  templateUrl: './search-button.component.html',
  styleUrl: './search-button.component.css'
})
export class SearchButtonComponent implements OnInit {
  books: any[] = [];
  filteredBooks: any[] = [];
  searchControl = new FormControl('');

  ngOnInit(): void {
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

  trackById(index: number, book: any): string {
    return book._id;
  }
}
