import { initializeApp } from 'firebase/app';
import { collection, DocumentData, Firestore, getDocs, getFirestore } from 'firebase/firestore';
import { FIREBASE_CONFIG } from './config/firebase';


export enum TABLE_NAMES {
  USERS = 'users',
}

export class FirebaseService {
  private db: Firestore;
  constructor() {
    initializeApp(FIREBASE_CONFIG);
    this.db = getFirestore();
  }

  async getList(table: TABLE_NAMES): Promise<DocumentData[]> {
    return (await getDocs(collection(this.db, table))).docs.map(x => ({ id: x.id, ...x.data() }));
  }
}
