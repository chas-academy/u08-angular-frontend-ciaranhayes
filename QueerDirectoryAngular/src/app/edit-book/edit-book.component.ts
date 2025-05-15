import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators';
import { EditBookService } from '../edit-book.service';
import { GetAllBooksService } from '../get-all-books.service';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
})
export class EditBookComponent implements OnInit {
  books: any[] = [];
  filteredBooks: any[] = [];
  searchControl = new FormControl('');
  showEditForm = false;

  editBook = {
    _id: '',
    title: '',
    author: '',
    short_description: '',
    page: '',
    genres: [] as string[],
  };

  genresInput = new FormControl('');

  constructor(
    private getAllBooksService: GetAllBooksService,
    private editBookService: EditBookService
  ) {}

  private visibleSubject = new BehaviorSubject<boolean>(true);
  isVisible$ = this.visibleSubject.asObservable();

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

  onEditClick(book: any): void {
    this.editBook = {
      _id: book._id,
      title: book.title,
      author: book.author,
      short_description: book.short_description,
      page: book.page_length,
      genres: Array.isArray(book.genres) ? [...book.genres] : [],
    };
    
    this.genresInput.setValue(this.editBook.genres.join(', '));
    
    this.showEditForm = true;
    this.toggleVisibility();
  }

  submitEditBook(): void {
  this.editBook.genres = this.genresInput.value
    ? this.genresInput.value.split(',').map(g => g.trim()).filter(g => g.length > 0)
    : [];

  const updatePayload = {
    title: this.editBook.title,
    author: this.editBook.author,
    short_description: this.editBook.short_description,
    page_length: this.editBook.page,
    genres: this.editBook.genres,
  };

  console.log('Submitting payload:', JSON.stringify(updatePayload, null, 2));

  this.editBookService.editBook(this.editBook._id, updatePayload).subscribe({
    next: (response) => {
      console.log('Full API response:', response);
      
      const updatedBooks = this.books.map(book => {
        if (book._id === this.editBook._id) {
          return { 
            ...book,
            ...updatePayload,
            genres: [...this.editBook.genres]
          };
        }
        return book;
      });

      this.books = updatedBooks;
      this.filteredBooks = updatedBooks;
      
      this.showEditForm = false;
      console.log('Local books after update:', this.books);
    },
    error: (err) => {
      console.error('Update failed:', err);
      if (err.error) {
        console.error('Server error response:', err.error);
      }
    },
  });
}
}