import { Component } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browse';
import { ListComponent } from './list/list.component';
import { BookService } from './book.service';
import { RouterOutlet, RouterLink } from '@angular/router';
// import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [/* BrowserModule,  */ListComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [BookService]
})
export class AppComponent {
  title = 'book_store';
}
