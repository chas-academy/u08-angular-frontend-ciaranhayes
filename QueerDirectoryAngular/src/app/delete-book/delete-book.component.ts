import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators';
import { GetAllBooksService } from '../get-all-books.service';
import { DeleteService } from '../delete.service';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-delete-book',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css'],
})
export class DeleteBookComponent implements OnInit {
  books: any[] = [];
  filteredBooks: any[] = [];
  searchControl = new FormControl('');
  private visibleSubject = new BehaviorSubject<boolean>(true);
  isVisible$ = this.visibleSubject.asObservable();

  constructor(
    private getAllBooksService: GetAllBooksService,
    private deleteService: DeleteService
  ) {}

  toggleVisibility(): void {
    this.visibleSubject.next(!this.visibleSubject.value);
  }

  ngOnInit(): void {
    this.loadBooks();

    this.searchControl.valueChanges
      .pipe(
        startWith(''),
        debounceTime(100),
        distinctUntilChanged(),
        map((term) => (term ?? '').toLowerCase())
      )
      .subscribe((term) => {
        this.filteredBooks = this.books.filter((book) =>
          book.title.toLowerCase().includes(term)
        );
      });
  }

  loadBooks(): void {
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

  onDeleteClick(bookId: string): void {
  if (!confirm('Are you sure you want to delete this book?')) return;

  this.deleteService.deleteBook(bookId).subscribe({
    next: () => {
      alert('Book deleted successfully!');
      window.location.reload();
    },
    error: (err) => {
      console.error('Delete failed:', err);
      alert(`Failed to delete the book. Server said: ${err?.error?.message || err.message || 'Unknown error'}`);
    },
  });
}
}
