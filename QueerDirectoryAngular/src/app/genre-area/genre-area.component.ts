import { Component, OnInit } from '@angular/core';
import { GetGenreService } from '../get-genre.service';

@Component({
  selector: 'app-genre-area',
  imports: [],
  templateUrl: './genre-area.component.html',
  styleUrl: './genre-area.component.css'
})
export class GenreAreaComponent implements OnInit {
  books: any[] = [];
  genre: string = 'Romance'

  constructor(private getGenreService: GetGenreService) {}

  ngOnInit(): void {
    this.getGenreService.getGenre(this.genre).subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (error) => {
        console.error('Failed to fetch books', error);
      }
    });
  }

}
