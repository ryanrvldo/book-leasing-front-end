import { Component, OnInit } from '@angular/core';
import { DataSource } from 'src/app/data/data-source';
import { Book } from 'src/app/model/book';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private bookService: BookService
  ) {}

  isAdmin: boolean;
  books: Book[] = [];

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdminRole();
    this.setBookList();
  }

  private async setBookList() {
    this.books = await this.bookService.getAllBook().then((response) => {
      return response.result;
    });
  }
}
