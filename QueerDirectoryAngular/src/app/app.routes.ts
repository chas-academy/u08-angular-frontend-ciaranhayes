import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DiscoverComponent } from './discover/discover.component';
import { GenreComponent } from './genre/genre.component';
import { LibraryComponent } from './library/library.component';
import { ContributeComponent } from './contribute/contribute.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent},
    { path: 'discover', component: DiscoverComponent},
    { path: 'genre', component: GenreComponent}, 
    { path: 'library', component: LibraryComponent}, 
    { path: 'contribute', component: ContributeComponent}

];
