import { Book } from './book';

export class TransactionDetailResponse {
  id: number;
  book: Book;
  rentalDate: string;
  returnDate: string;
  totalCost: number;
}
