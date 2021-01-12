import { Component, OnInit } from '@angular/core';
import { DataSource } from 'src/app/data/data-source';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.setBookListTable();
  }

  private setBookListTable(): void {
    const table = document.querySelector('table#bookList');
    if (!table) {
      console.log('There is no table element.');
      return;
    }
    const tableHead = document.createElement('thead');
    tableHead.innerHTML = /* html */ `
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Title</th>
      <th scope="col">ISBN</th>
      <th scope="col">Desciption</th>
      <th scope="col">Year</th>
      <th scope="col">Rating</th>
      <th scope="col">Rental Cost</th>
      <th scope="col">Replacement Cost</th>
      <th scope="col">Action</th>
    </tr>`;
    table.appendChild(tableHead);

    const tableBody = document.createElement('tbody');
    const bookList = DataSource.getBookList();
    bookList.forEach((book, idx) => {
      tableBody.innerHTML += /* html */ `
      <tr class="text-center">
        <th scope="row">${idx + 1}</th>
        <td>${book.title}</td>
        <td>${book.isbn}</td>
        <td>${book.description ? book.description : `-`}</td>
        <td>${book.publicationYear}</td>
        <td>${book.rating}</td>
        <td>${book.rentalCost}</td>
        <td>${book.replacementCost}</td>
        <td>
          <a href="" title="View Details" class="text-decoration-none">
            <i class="fal fa-info-circle fa-lg p-2"></i>
          </a>
          <a href="/book/edit" title="Edit" class="text-decoration-none">
            <i class="fal fa-edit fa-lg p-2"></i>
          </a>
          <a href="" title="Remove" class="text-decoration-none">
            <i class="fal fa-trash-alt fa-lg p-2"></i>
          </a>
          
        </td>
      </tr>`;
    });
    table.appendChild(tableBody);
  }
}
