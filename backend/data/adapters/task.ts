import {limit, orderBy, where} from 'firebase/firestore';
import { injectable } from 'inversify';
import { Task, TaskRepository } from '../../domain';
import { FirebaseService, TABLE_NAMES } from '../firebase.service';

@injectable()
export class TaskAdapter implements TaskRepository {
  private firebaseService: FirebaseService;

  constructor() {
    this.firebaseService = new FirebaseService(TABLE_NAMES.TASKS);
  }

  async get(id: string): Promise<Task> {
    const res = await this.firebaseService.get(id);
    return { ...res } as Task;
  }

  async getList(listId: string): Promise<Task[]> {
    return (await this.firebaseService.getList(where('listId', '==', listId), orderBy('order','desc'))).map(x => ({ ...x } as Task));
  }

  async getWhereOrderGreaterThan(listId: string, order: number): Promise<Task[]> {
    return (await this.firebaseService.getList(where('listId', '==', listId), where('order', '>=', order))).map(x => ({ ...x } as Task));
  }

  async getLast(listId: string): Promise<Task> {
    return (await this.firebaseService.getList(where('listId', '==', listId), limit(1), orderBy('order', 'desc'))).map(x => ({...x} as Task))[0];
  }

  async delete(id: string): Promise<Task> {
    const task = await this.get(id);
    await this.firebaseService.delete(id);
    return task;
  }

  async update(id: string, data: Partial<Task>): Promise<Task> {
    const task = await this.get(id);
    await this.firebaseService.update(id, data);

    return { id, ...task, ...data } as Task;
  }

  async create(data: Partial<Task>): Promise<Task> {
    return (await this.firebaseService.create(data)) as Task;
  }

}
