import { injectable } from 'inversify';
import { User, UserRepository } from '../../domain';

@injectable()
export class UserAdapter implements UserRepository {
  get(id: string): Promise<User> {
    return Promise.resolve({ id, name: 'some name' });
  }
  getList(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  update(id: string, data: Partial<User>): Promise<User> {
    throw new Error('Method not implemented.');
  }
  create(data: Partial<User>): Promise<User> {
    throw new Error('Method not implemented.');
  }

}
