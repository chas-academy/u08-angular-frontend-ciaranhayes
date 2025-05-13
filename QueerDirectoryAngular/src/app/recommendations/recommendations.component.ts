import { Component, OnInit } from '@angular/core';
import { RandomBookRecService } from '../random-book-rec.service';

@Component({
  selector: 'app-recommendations',
  imports: [],
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.css'
})
export class RecommendationsComponent implements OnInit {
  book: any[]= [];
  
  constructor(private randomBookRecService: RandomBookRecService) {}

  ngOnInit(): void {
    this.getRecommendation();
  }

  getRecommendation(): void {
    this.randomBookRecService.getRandomBook().subscribe({
      next: (data) => {
        this.book = data; 
      },
      error: (error) => {
        console.error('Failed to fetch book', error);
      }
    });
  }

}
