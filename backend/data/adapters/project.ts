import { where } from 'firebase/firestore';
import { injectable } from 'inversify';
import { Project, ProjectRepository } from '@domain';
import { FirebaseService, TABLE_NAMES } from '../firebase.service';

@injectable()
export class ProjectAdapter implements ProjectRepository {
  private firebaseService: FirebaseService;

  constructor() {
    this.firebaseService = new FirebaseService(TABLE_NAMES.PROJECTS);
  }

  async get(id: string): Promise<Project> {
    const res = await this.firebaseService.get(id);
    return { ...res } as Project;
  }

  async getList(userId: string): Promise<Project[]> {
    return (await this.firebaseService.getList(where('userId', '==', userId))).map(x => ({ ...x } as Project));
  }

  async delete(id: string): Promise<Project> {
    const project = await this.get(id);
    await this.firebaseService.delete(id);
    return project;
  }

  async update(id: string, data: Partial<Project>): Promise<Project> {
    const project = await this.get(id);
    await this.firebaseService.update(id, data);

    return { id, ...project, ...data } as Project;
  }

  async create(data: Partial<Project>): Promise<Project> {
    return (await this.firebaseService.create(data)) as Project;
  }

}
