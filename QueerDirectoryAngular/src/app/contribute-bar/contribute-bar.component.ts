import { Component } from '@angular/core';
import { EditBookComponent } from '../edit-book/edit-book.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contribute-bar',
  imports: [EditBookComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './contribute-bar.component.html',
  styleUrl: './contribute-bar.component.css'
})
export class ContributeBarComponent {

}
