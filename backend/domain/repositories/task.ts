import { Task } from '..';
import { BaseRepository } from './base';

export interface TaskRepository extends BaseRepository<Task> {
  getList(listId: string): Promise<Task[]>;
  getLast(listId: string): Promise<Task>;
  getWhereOrderGreaterThan(listId: string, orderVal): Promise<Task[]>;
}
