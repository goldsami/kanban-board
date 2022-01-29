import { Project } from '..';
import { BaseRepository } from './base';

export interface ProjectRepository extends BaseRepository<Project> {
  getList(userId: string): Promise<Project[]>;
}
