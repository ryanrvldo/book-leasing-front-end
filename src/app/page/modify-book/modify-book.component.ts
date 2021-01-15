import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSource } from 'src/app/data/data-source';
import { Author } from 'src/app/model/author';
import { Book } from 'src/app/model/book';
import { BookRequest } from 'src/app/model/book-request';
import { Category } from 'src/app/model/category';
import { InventoryStatus } from 'src/app/model/inventory-status';
import { Language } from 'src/app/model/language';
import { Publisher } from 'src/app/model/publisher';
import { BookService } from 'src/app/service/book.service';
import { CategoryService } from 'src/app/service/category.service';
import { InventoryService } from 'src/app/service/inventory.service';
import { LanguageService } from 'src/app/service/language.service';
import { PublisherService } from 'src/app/service/publisher.service';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-modify-book',
  templateUrl: './modify-book.component.html',
  styleUrls: ['./modify-book.component.css'],
})
export class ModifyBookComponent implements OnInit {
  constructor(
    private router: Router,
    private toastService: ToastService,
    private languageService: LanguageService,
    private publisherService: PublisherService,
    private categoryService: CategoryService,
    private inventoryService: InventoryService,
    private bookService: BookService
  ) {}

  book: Book = new Book();

  selectedLanguage: string;
  languages: Language[];

  selectedPublisher: string;
  publishers: Publisher[];

  selectedCategory: string;
  categories: Category[];
  requestCategories: Category[] = [];

  selectedStatus: string;
  statusList: InventoryStatus[];

  bookRequest: BookRequest = new BookRequest();

  newLanguage: Language = new Language();
  newPublisher: Publisher = new Publisher();
  newCategory: Category = new Category();

  author: Author = new Author();
  authors: Author[] = [];

  ngOnInit(): void {
    this.setLanguageOption();
    this.setPublisherOption();
    this.setCategoryOption();
    this.setStatusOption();
  }

  private async setLanguageOption() {
    this.languages = await this.languageService
      .getAllLanguage()
      .then((response) => response.result);
    this.selectedLanguage = this.languages[0].code;
  }

  private async setPublisherOption() {
    this.publishers = await this.publisherService
      .getAllPublisher()
      .then((response) => response.result);
    this.selectedPublisher = this.publishers[0].code;
  }

  private async setCategoryOption() {
    this.categories = await this.categoryService
      .getAllCategory()
      .then((response) => response.result);
    this.selectedCategory = this.categories[0].name;
  }

  private async setStatusOption() {
    this.statusList = await this.inventoryService
      .getAllInventoryStatus()
      .then((response) => response.result);
    this.selectedStatus = this.statusList[0].code;
  }

  async addBook() {
    const language = this.languages.find(
      (lang) => lang.code === this.selectedLanguage
    );
    if (language) {
      this.book.language = language;
    }

    const publisher = this.publishers.find(
      (p) => p.code === this.selectedPublisher
    );
    if (publisher) {
      this.book.publisher = publisher;
    }
    this.bookRequest.book = this.book;

    this.bookRequest.categories = [
      this.categories.find((c) => c.name === this.selectedCategory),
    ];

    if (this.authors.length === 0) {
      this.authors.push(this.author);
    }
    this.bookRequest.authors = this.authors;

    const status = this.statusList.find((s) => s.code === this.selectedStatus);
    if (status) {
      this.bookRequest.status = status;
    }
    try {
      console.log(this.bookRequest);
      const response = await this.bookService.addBook(this.bookRequest);
      if (response.code === 201) {
        this.showToastSuccess(response.result);
        this.router.navigateByUrl('/book');
      }
    } catch (error) {
      console.log(error);
      this.showToastError(error.error.result);
    }
  }

  async addNewLanguage() {
    try {
      const response = await this.languageService.addNewLanguage(
        this.newLanguage
      );
      if (response.code === 201) {
        this.showToastSuccess(response.result);
        this.languages.push(this.newLanguage);
      }
    } catch (error) {
      console.log(error);
      this.showToastError(error.error.result);
    }
    document.getElementById('btnCloseLanguageModal').click();
  }

  async addNewPublisher() {
    try {
      const response = await this.publisherService.addNewPublisher(
        this.newPublisher
      );
      if (response.code === 201) {
        this.showToastSuccess(response.result);
        this.publishers.push(this.newPublisher);
      }
    } catch (error) {
      console.log(error);
      this.showToastError(error.error.result);
    }
    document.getElementById('btnClosePublisherModal').click();
  }

  async addNewCategory() {
    try {
      const response = await this.categoryService.addNewCategory(
        this.newCategory
      );
      if (response.code === 201) {
        this.showToastSuccess(response.result);
        this.categories.push(this.newCategory);
      }
    } catch (error) {
      console.log(error);
      this.showToastError(error.error.result);
    }
    document.getElementById('btnCloseCategoryModal').click();
  }

  addAuthorList() {
    this.authors.push(this.author);
    this.author = new Author();
    console.log(this.authors);
  }

  /*  addCategoryList() {
    this.requestCategories.push(this.newCategory);
    this.newCategory = new Category();
    console.log(this.requestCategories);
  } */

  showToastSuccess(message: string) {
    this.toastService.emitMessage({
      severity: 'success',
      summary: 'Success',
      detail: message,
    });
  }

  showToastError(message: string) {
    this.toastService.emitMessage({
      severity: 'error',
      summary: 'Failed',
      detail: message,
    });
  }
}
