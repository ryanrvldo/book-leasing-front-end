import { Profile } from './profile';
import { RentalDetailRequest } from './rental-detail-request';

export class RentalHeaderRequest {
  customer: Profile;
  items: RentalDetailRequest[];
  userId: number;
}
