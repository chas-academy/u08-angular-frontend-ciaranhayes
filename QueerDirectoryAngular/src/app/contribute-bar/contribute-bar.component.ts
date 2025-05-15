import { Component } from '@angular/core';
import { EditBookComponent } from '../edit-book/edit-book.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddBookComponent } from '../add-book/add-book.component';
import { DeleteBookComponent } from '../delete-book/delete-book.component';

@Component({
  selector: 'app-contribute-bar',
  imports: [EditBookComponent, ReactiveFormsModule, FormsModule, AddBookComponent, DeleteBookComponent],
  templateUrl: './contribute-bar.component.html',
  styleUrl: './contribute-bar.component.css'
})
export class ContributeBarComponent {

}
