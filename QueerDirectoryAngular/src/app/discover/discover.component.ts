import { Component } from '@angular/core';
import { BannerRestComponent } from '../banner-rest/banner-rest.component';
import { RecommendationsComponent } from '../recommendations/recommendations.component';

@Component({
  selector: 'app-discover',
  imports: [BannerRestComponent, RecommendationsComponent],
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.css'
})
export class DiscoverComponent {
  
}
