import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book.model';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  imports: [FormsModule, RouterLink],
  styleUrl: './form.component.css',
  // providers:[BookService]
})
export class FormComponent implements OnInit {
  // @Input() book: Book | null = null;
  @Input() book: Book = {title:"", author:""};
  @Output() save = new EventEmitter<void>();

  constructor(private bookService: BookService) {
    console.log("Form Component initialized");
  }

  ngOnInit(): void {}

  onSubmit(event: Event): void {
    event.preventDefault(); 
    if (this.book) {
      console.log(this.book);
      if (this.book.id) {
        this.bookService.updateBook(this.book);
      } else {
        this.bookService.addBook(this.book);
        console.log("Add Book");
      }
      this.book = {title:"", author:""};
      this.bookService.selectedBook = {title:"", author:""};
      this.save.emit();
    }
  }

  clearForm(): void {
    this.book = {title:"", author:""};
  }
}
