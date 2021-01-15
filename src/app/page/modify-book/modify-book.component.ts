import { Component, OnInit } from '@angular/core';
import { DataSource } from 'src/app/data/data-source';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-modify-book',
  templateUrl: './modify-book.component.html',
  styleUrls: ['./modify-book.component.css'],
})
export class ModifyBookComponent implements OnInit {
  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    const titlePage = document.querySelector('#titlePage');
    if (!titlePage) {
      return;
    }

    if (window.location.pathname.includes('edit')) {
      titlePage.innerHTML = 'Update Book';
      const selectedBook = DataSource.getBookById();
      (<HTMLInputElement>document.querySelector('input#bookTitle')).value =
        selectedBook.title;
      (<HTMLInputElement>document.querySelector('input#description')).value =
        selectedBook.description ?? '-';
      (<HTMLInputElement>document.querySelector('input#isbn')).value =
        selectedBook.isbn;
      (<HTMLInputElement>document.querySelector('input#rating')).value = String(
        selectedBook.rating
      );
      (<HTMLInputElement>(
        document.querySelector('input#rentalCost')
      )).value = String(selectedBook.rentalCost);
      (<HTMLInputElement>(
        document.querySelector('input#replacementCost')
      )).value = String(selectedBook.replacementCost);
      (<HTMLInputElement>document.querySelector('input#year')).value = String(
        selectedBook.publicationYear
      );
    } else {
      titlePage.innerHTML = 'Add Book';
    }

    this.setLanguageOption();
    this.setPublisherOption();
    this.setCategoryOption();
  }

  private setLanguageOption(): void {
    const languages = DataSource.getLanguageList();
    const languageSelect = document.querySelector('#languageSelect');
    if (!languageSelect) {
      console.log('There is no language select element.');
      return;
    }

    languages.forEach((lang) => {
      const languageOption = document.createElement('option');
      languageOption.innerText = lang.name;
      languageSelect.appendChild(languageOption);
    });
  }

  private setPublisherOption(): void {
    const publishers = DataSource.getPublisherList();
    const publisherSelect = document.querySelector('#publisherSelect');
    if (!publisherSelect) {
      console.log('There is no publisher select element.');
      return;
    }

    publishers.forEach((publisher) => {
      const publisherOption = document.createElement('option');
      publisherOption.innerText = publisher.name;
      publisherSelect.appendChild(publisherOption);
    });
  }

  private setCategoryOption(): void {
    const categories = DataSource.getCategoryList();
    const categorySelect = document.querySelector('#categorySelect');
    if (!categorySelect) {
      console.log('There is no category select element.');
      return;
    }
    categories.forEach((category) => {
      const categoryOption = document.createElement('option');
      categoryOption.innerText = category.name;
      categorySelect.appendChild(categoryOption);
    });
  }

  addBook(): void {
    this.toastService.emitMessage({
      severity: 'success',
      summary: 'Success',
      detail: 'TESTTTT!!!',
    });
  }
}
