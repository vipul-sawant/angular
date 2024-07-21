import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book.model';
// import { FormComponent } from '../form/form.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports:[CommonModule/* , FormComponent */, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  // providers:[BookService]
})
export class ListComponent implements OnInit {
  books:Book[] = [];
  // selectedBook:Book | null = null;
  // selectedBook:Book = {title:"", author:""};

  constructor(private bookService:BookService, private router:Router){
    console.log("List Component initialized");
    // this.selectedBook = this.bookService.selectedBook;
  }

  ngOnInit(): void {
    this.refreshBooks();
  }

  refreshBooks(): void {
    this.books = this.bookService.getBooks(); // Update books array from service
  }

  // onBookUpdate(): void {
  //   this.refreshBooks();
  // }

  selectBook(book:Book):void {
    // this.selectedBook = {...book};
    this.bookService.selectBook(book);
    this.router.navigate(['/entry']);
  }

  deleteBook(book:Book): void {
    this.bookService.deleteBook(book);
    this.books = this.bookService.getBooks();
  }
}
