import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, updateDoc } from 'firebase/firestore';
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
  async delete(id: string): Promise<User> {
    const db = getFirestore();
    deleteDoc(doc(db, 'users', id));
    return null;
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
