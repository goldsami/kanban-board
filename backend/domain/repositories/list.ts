import { List } from '..';
import { BaseRepository } from './base';

export interface ListRepository extends BaseRepository<List> {
  getList(projectId: string): Promise<List[]>;
  getLast(projectId: string): Promise<List>;
  getWhereOrderGreaterThan(projectId: string, orderVal): Promise<List[]>;
}
