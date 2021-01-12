import { Profile } from './profile';
import { Role } from './role';

export class User {
  id: number;
  username: string;
  password: string;
  profile: Profile;
  role: Role;
  isActive: boolean;
}
