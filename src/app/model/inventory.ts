import { Book } from './book';
import { InventoryStatus } from './inventory-status';

export class Inventory {
  id: number;
  book: Book;
  status: InventoryStatus;
}
