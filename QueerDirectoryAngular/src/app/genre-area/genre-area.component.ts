import { Component, OnInit } from '@angular/core';
import { GetGenreService } from '../get-genre.service';
import { DropdownMenuComponent } from '../dropdown-menu/dropdown-menu.component';

@Component({
  selector: 'app-genre-area',
  imports: [DropdownMenuComponent],
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

  booksByGenre: Map<string, any[]> = new Map();

  ngOnInit(): void {
    this.genres.forEach(genre => {
      this.getGenreService.getGenre(genre).subscribe({
        next: (data) => {
          this.booksByGenre.set(genre, data);
        },
        error: (error) => {
          console.error(`Failed to fetch books for genre ${genre}`, error);
        }
      });
    });
  }
}
