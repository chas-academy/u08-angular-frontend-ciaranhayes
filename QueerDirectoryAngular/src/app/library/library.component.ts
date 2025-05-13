import { Component } from '@angular/core';
import { BannerRestComponent } from '../banner-rest/banner-rest.component';
import { AllBooksComponent } from '../all-books/all-books.component';

@Component({
  selector: 'app-library',
  imports: [BannerRestComponent, AllBooksComponent],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})
export class LibraryComponent {

}
