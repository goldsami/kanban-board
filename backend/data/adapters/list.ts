import {limit, orderBy, where} from 'firebase/firestore';
import { injectable } from 'inversify';
import { List, ListRepository } from '../../domain';
import { FirebaseService, TABLE_NAMES } from '../firebase.service';

@injectable()
export class ListAdapter implements ListRepository {
  private firebaseService: FirebaseService;

  constructor() {
    this.firebaseService = new FirebaseService(TABLE_NAMES.LIST);
  }

  async get(id: string): Promise<List> {
    const res = await this.firebaseService.get(id);
    return { ...res } as List;
  }

  async getList(projectId: string): Promise<List[]> {
    return (await this.firebaseService.getList(where('projectId', '==', projectId), orderBy('order','desc'))).map(x => ({ ...x } as List));
  }

  async getWhereOrderGreaterThan(projectId: string, order): Promise<List[]> {
    return (await this.firebaseService.getList(where('projectId', '==', projectId), where('order', '>=', order))).map(x => ({ ...x } as List));
  }

  async getLast(projectId: string): Promise<List> {
    return (await this.firebaseService.getList(where('projectId', '==', projectId), limit(1), orderBy('order','desc'))).map(x => ({ ...x } as List))[0];
  }

  async delete(id: string): Promise<List> {
    const list = await this.get(id);
    await this.firebaseService.delete(id);
    return list;
  }

  async update(id: string, data: Partial<List>): Promise<List> {
    const list = await this.get(id);
    await this.firebaseService.update(id, data);

    return { id, ...list, ...data } as List;
  }

  async create(data: Partial<List>): Promise<List> {
    return (await this.firebaseService.create(data)) as List;
  }

}
