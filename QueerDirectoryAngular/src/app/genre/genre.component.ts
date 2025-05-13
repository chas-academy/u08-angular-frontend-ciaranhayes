import { Component } from '@angular/core';
import { BannerRestComponent } from '../banner-rest/banner-rest.component';
import { GenreAreaComponent } from '../genre-area/genre-area.component';

@Component({
  selector: 'app-genre',
  imports: [BannerRestComponent, GenreAreaComponent],
  templateUrl: './genre.component.html',
  styleUrl: './genre.component.css'
})
export class GenreComponent {

}
