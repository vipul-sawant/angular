import { Injectable } from '@angular/core';
import { Book } from './book.model';

Injectable({
  providedIn:'root'
})

export class BookService{
  private books:Book[] = [];
  private idCounter:number = 1;
  selectedBook:Book = {title:"", author:""}

  constructor(){
    console.log('BookService instance created');
  }

  getBooks(): Book[] {
    console.log("getBooks :", this.books);
    return this.books;
  }

  addBook(book:Book):void{
    book.id = this.idCounter++;
    console.log("addBook :",book);
    this.books.push(book);
    console.log('Books after adding:', this.books); 
  }

  selectBook(book:Book):void{
    this.selectedBook = book;
    console.log("selectBook");
  }

  updateBook(book:Book):void{
    const index = this.books.findIndex(b => b.id === book.id);

    if (index !== -1) {
      this.books.splice(index, 1, book); 
    }
  }

  deleteBook(b:Book):void{
    this.books = this.books.filter(book => book.id !== b.id);
  }

}