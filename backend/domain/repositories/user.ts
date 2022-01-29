import { User } from '..';
import { BaseRepository } from './base';

export interface UserRepository extends BaseRepository<User> {
  getList(): Promise<User[]>;
}
