import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner-rest',
  imports: [CommonModule],
  templateUrl: './banner-rest.component.html',
  styleUrl: './banner-rest.component.css'
})
export class BannerRestComponent implements OnInit {
  title: string = '';
  body: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.setBanner(this.router.url); 

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.setBanner(event.urlAfterRedirects);
    });
  }

  setBanner(url: string) {
    if (url.includes('/discover')) {
      this.title = 'Looking to discover something new?';
      this.body = 'Try our recommendation feature, click the button and get yourself a randomly selected book from the database';
    } else if (url.includes('/genre')) {
      this.title = 'Genre';
      this.body = 'Find a genre that suits you';
    } else if (url.includes('/library')) {
      this.title = 'Library Page';
      this.body = 'Look through our full assortment of books at the Queer Book Repository';
    } else if (url.includes('/contribute')) {
      this.title = 'Contribution Page';
      this.body = 'Make your mark and continue adding books to the ever growing library!';
    } else {
      this.title = '';
      this.body = '';
    }
  }

}
