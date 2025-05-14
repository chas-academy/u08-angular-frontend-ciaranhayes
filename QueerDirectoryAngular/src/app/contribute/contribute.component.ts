import { Component } from '@angular/core';
import { BannerRestComponent } from '../banner-rest/banner-rest.component';
import { ContributeBarComponent } from '../contribute-bar/contribute-bar.component';

@Component({
  selector: 'app-contribute',
  imports: [BannerRestComponent, ContributeBarComponent],
  templateUrl: './contribute.component.html',
  styleUrl: './contribute.component.css'
})
export class ContributeComponent {

}
