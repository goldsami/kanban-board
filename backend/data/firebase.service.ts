import { initializeApp } from 'firebase/app';
import { addDoc, collection, deleteDoc, doc, DocumentData, DocumentSnapshot, Firestore, getDoc, getDocs, getFirestore, updateDoc } from 'firebase/firestore';
import { FIREBASE_CONFIG } from './config/firebase';


export enum TABLE_NAMES {
  USERS = 'users',
  TASKS = 'tasks',
  PROJECTS = 'projects',
}

export class FirebaseService {
  private db: Firestore;
  private tableName: TABLE_NAMES;

  constructor(tableName: TABLE_NAMES) {
    initializeApp(FIREBASE_CONFIG);
    this.db = getFirestore();
    this.tableName = tableName;
  }

  async getList(table = this.tableName): Promise<DocumentData[]> {
    return (await getDocs(collection(this.db, table))).docs.map(this.toDocumentData);
  }

  async get(id: string, table = this.tableName): Promise<DocumentData> {
    const res = await getDoc(doc(this.db, table, id));

    return this.toDocumentData(res);
  }

  delete(id: string, table = this.tableName): Promise<void> {
    return deleteDoc(doc(this.db, table, id));
  }

  async create(data: Record<string, unknown>, table = this.tableName): Promise<DocumentData> {
    const docRef = await addDoc(collection(this.db, table), {
      ...data,
    });
    return { id: docRef.id, ...data };
  }

  async update(id: string, data: Record<string, unknown>, table = this.tableName): Promise<void> {
    const docRef = doc(this.db, table, id);
    return updateDoc(docRef, { ...data });
  }

  private toDocumentData(snapshot: DocumentSnapshot<DocumentData>): DocumentData {
    return { id: snapshot.id, ...snapshot.data() };
  }
}
