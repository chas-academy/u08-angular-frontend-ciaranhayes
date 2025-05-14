import { Component } from '@angular/core';
import { EditBookComponent } from '../edit-book/edit-book.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contribute-bar',
  imports: [EditBookComponent, ReactiveFormsModule],
  templateUrl: './contribute-bar.component.html',
  styleUrl: './contribute-bar.component.css'
})
export class ContributeBarComponent {

}
