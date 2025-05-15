import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddBookService } from '../add-book.service';
import { CommonModule } from '@angular/common';
import { of, tap } from 'rxjs';

@Component({
  selector: 'app-add-book',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css',
})
export class AddBookComponent {
  constructor(private addBookService: AddBookService) {}
  book: any[] = [];

  addBook = {
    title: '' as string,
    author: '' as string,
    description: '' as string,
    page: '' as string,
    genre: [] as string[],
  };

  genresString = '';

  submitAddBook(): void {
    const addedBookData = {
      title: this.addBook.title,
      author: this.addBook.author,
      description: this.addBook.description,
      page: Number(this.addBook.page),
      genre: this.addBook.genre,
    };

    this.addBookService.addBook(addedBookData).subscribe({
      next: (response) => {
        console.log('Book added:', response);
      },
      error: (err) => {
        console.error('Failed to add book:', err);
      },
    });

    of('Book added!').subscribe((message) => {
      alert(message);
      window.location.reload();
    });
  }

  setGenresFromString(value: string): void {
    const parsedGenres = value
      .split(',')
      .map((g) => g.trim())
      .filter((g) => g.length > 0);

    if (parsedGenres.length === 0 && value.trim().length > 0) {
      this.addBook.genre = [value.trim()];
    } else {
      this.addBook.genre = parsedGenres;
    }
  }
}
