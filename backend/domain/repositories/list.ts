import { List } from '..';
import { BaseRepository } from './base';

export interface ListRepository extends BaseRepository<List> {
  getList(projectId: string): Promise<List[]>;
}
