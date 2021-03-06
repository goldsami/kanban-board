import { initializeApp } from 'firebase/app';
import { addDoc, collection, deleteDoc, doc, DocumentData, DocumentSnapshot, Firestore, getDoc, getDocs, getFirestore, query, updateDoc } from 'firebase/firestore';
import { FIREBASE_CONFIG } from './config/firebase';


export enum TABLE_NAMES {
  USERS = 'users',
  TASKS = 'tasks',
  PROJECTS = 'projects',
  LIST = 'list',
}

export class FirebaseService {
  private db: Firestore;
  private tableName: TABLE_NAMES;

  constructor(tableName: TABLE_NAMES) {
    initializeApp(FIREBASE_CONFIG);
    this.db = getFirestore();
    this.tableName = tableName;
  }

  async getList(...args): Promise<DocumentData[]> {
    const q = query(collection(this.db, this.tableName), ...args);
    return (await getDocs(q)).docs.map(this.toDocumentData);
  }

  async get(id: string): Promise<DocumentData> {
    const res = await getDoc(doc(this.db, this.tableName, id));

    return this.toDocumentData(res);
  }

  delete(id: string): Promise<void> {
    return deleteDoc(doc(this.db, this.tableName, id));
  }

  async create(data: Record<string, unknown>,): Promise<DocumentData> {
    const docRef = await addDoc(collection(this.db, this.tableName), {
      ...data,
    });
    return { id: docRef.id, ...data };
  }

  async update(id: string, data: Record<string, unknown>): Promise<void> {
    const docRef = doc(this.db, this.tableName, id);
    return updateDoc(docRef, { ...data });
  }

  private toDocumentData(snapshot: DocumentSnapshot<DocumentData>): DocumentData {
    if (!snapshot.data()) throw new Error('Item not found');

    return { id: snapshot.id, ...snapshot.data() };
  }
}
