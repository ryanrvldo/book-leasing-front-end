import { Language } from './language';
import { Publisher } from './publisher';

export class Book {
  id: number;
  title: string;
  description: string;
  isbn: string;
  rating: number;
  rentalCost: number;
  replacementCost: number;
  publicationYear: number;
  language: Language;
  publisher: Publisher;
}
