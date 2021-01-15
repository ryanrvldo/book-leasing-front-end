import { Author } from './author';
import { Book } from './book';
import { Category } from './category';
import { InventoryStatus } from './inventory-status';

export class BookRequest {
  book: Book;
  categories: Category[];
  authors: Author[];
  stock: number;
  status: InventoryStatus;
}
