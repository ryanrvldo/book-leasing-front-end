import { Profile } from './profile';
import { TransactionDetailResponse } from './transaction-detail-response';
import { User } from './user';

export class TransactionResponse {
  customer: Profile;
  user: User;
  detailItems: TransactionDetailResponse[];
}
