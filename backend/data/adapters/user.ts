import { where } from 'firebase/firestore';
import { injectable } from 'inversify';
import { User, UserRepository } from '@domain';
import { FirebaseService, TABLE_NAMES } from '../firebase.service';

@injectable()
export class UserAdapter implements UserRepository {
  private firebaseService: FirebaseService;

  constructor() {
    this.firebaseService = new FirebaseService(TABLE_NAMES.USERS);
  }

  async get(id: string): Promise<User> {
    return (await this.firebaseService.getList(where('authId', '==', id))).map(x => ({ ...x } as User))[0];
  }

  async getList(): Promise<User[]> {
    return (await this.firebaseService.getList()).map(x => ({ ...x } as User));
  }

  async delete(id: string): Promise<User> {
    const user = await this.get(id);
    await this.firebaseService.delete(id);
    return user;
  }

  async update(id: string, data: Partial<User>): Promise<User> {
    const user = await this.get(id);
    await this.firebaseService.update(id, data);

    return { id, ...user, ...data } as User;
  }

  async create(data: Partial<User>): Promise<User> {
    return (await this.firebaseService.create(data)) as User;
  }

}
