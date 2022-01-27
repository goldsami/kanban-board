import { initializeApp } from 'firebase/app';
import { collection, DocumentData, Firestore, getDocs, getFirestore, QuerySnapshot } from 'firebase/firestore';
import { FIREBASE_CONFIG } from './config/firebase';


export class FirebaseService {
  private db: Firestore;
  constructor() {
    initializeApp(FIREBASE_CONFIG);
    this.db = getFirestore();
  }

  getList(): Promise<QuerySnapshot<DocumentData>> {
    return getDocs(collection(this.db, 'users'));
  }
}
