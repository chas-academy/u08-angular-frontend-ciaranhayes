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
}
