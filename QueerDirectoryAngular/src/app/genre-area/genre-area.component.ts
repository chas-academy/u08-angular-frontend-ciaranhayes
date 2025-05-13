import { Component, OnInit } from '@angular/core';
import { GetGenreService } from '../get-genre.service';

@Component({
  selector: 'app-genre-area',
  imports: [],
  templateUrl: './genre-area.component.html',
  styleUrl: './genre-area.component.css',
})
export class GenreAreaComponent implements OnInit {
  books: any[] = [];
  genres: string[] = [
    'Romance',
    'Coming of Age',
    'Literary Fiction',
    'Fantasy',
    'Young Adult',
    'Contemporary',
    'Adventure',
    'Lesbian Fiction',
    'LGBTQIA+',
    'Historical Fiction',
    'Graphic Novel',
    'Memoir',
    'Transgender',
    'Non-fiction',
    'Gothic Fiction',
    'Philosophy',
    'Thriller',
    'Mystery',
    'Comedy',
    'Poetry',
    'Science Fiction',
    'Horror',
  ];

  constructor(private getGenreService: GetGenreService) {}

  ngOnInit(): void {
    for (let i=0; i < this.genres.length; i++) {
      this.getGenreService.getGenre(this.genres[i]).subscribe({
        next: (data) => {
          this.books = data;
        },
        error: (error) => {
          console.error('Failed to fetch books', error);
        },
      });
    }
  }
}
