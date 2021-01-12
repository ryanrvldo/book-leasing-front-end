import { Customer } from './customer';
import { DetailRental } from './detail-rental';
import { User } from './user';

export class HeaderRental {
  id: number;
  receipt: string;
  customer: Customer;
  user: User;
}
