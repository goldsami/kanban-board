import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import { injectable } from 'inversify';
import { User, UserRepository } from '../../domain';

@injectable()
export class UserAdapter implements UserRepository {
  get(id: string): Promise<User> {
    return Promise.resolve({ id, name: 'some name' });
  }
  async getList(): Promise<User[]> {
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, 'users'));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
    return [];
  }
  delete(id: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  update(id: string, data: Partial<User>): Promise<User> {
    throw new Error('Method not implemented.');
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
