import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { Router } from '@angular/router';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-entry',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.css'
})
export class EntryComponent {
  books:Book[] = [];
  selectedBook:Book = {title:"", author:""};

  constructor(private router: Router, private bookService:BookService) {
    this.selectedBook = this.bookService.selectedBook;
  }

  OnInit(): void{
    this.selectedBook = this.bookService.selectedBook;
    console.log('On Init');
  }

  onBookUpdate(): void {
    this.router.navigate(['/']);
  }
}
