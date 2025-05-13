import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  imports: [],
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.css',
})
export class DropdownMenuComponent {
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

  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  sanitizeGenre(genre: string): string {
    return genre
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9\-]/g, '');
  }

  scrollToGenre(event: Event, genre: string): void {
    event.preventDefault();

    const id = this.sanitizeGenre(genre);
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    this.dropdownOpen = false;
  }
}
