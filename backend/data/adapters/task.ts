import { where } from 'firebase/firestore';
import { injectable } from 'inversify';
import { Task, TaskRepository } from '@domain';
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

  async getList(projectId: string): Promise<Task[]> {
    return (await this.firebaseService.getList(where('projectId', '==', projectId))).map(x => ({ ...x } as Task));
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
