import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore';
import { injectable } from 'inversify';
import { User, UserRepository } from '../../domain';
import { FirebaseService, TABLE_NAMES } from '../firebase.service';

@injectable()
export class UserAdapter implements UserRepository {
  private firebaseService: FirebaseService;

  constructor() {
    this.firebaseService = new FirebaseService(TABLE_NAMES.USERS);
  }

  async get(id: string): Promise<User> {
    const res = await this.firebaseService.get(id);
    return { ...res } as User;
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
    const db = getFirestore();
    const docRef = doc(db, 'users', id);

    // Update the timestamp field with the value from the server
    const updateTimestamp = await updateDoc(docRef, {
      name: data.name
    });

    return null;
  }

  async create(data: Partial<User>): Promise<User> {
    const db = getFirestore();
    try {
      const docRef = await addDoc(collection(db, 'users'), {
        name: data.name,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
    return Promise.resolve({ id: 'new user', name: 'new usr name' });
  }

}
