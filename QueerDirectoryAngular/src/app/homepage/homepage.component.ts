import { Component } from '@angular/core';
import { BannerHomeComponent } from '../banner-home/banner-home.component';
import { FeaturedBooksComponent } from '../featured-books/featured-books.component';

@Component({
  selector: 'app-homepage',
  imports: [BannerHomeComponent, FeaturedBooksComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
