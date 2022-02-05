import { projectRepository } from '../../../../domain';
import { Project } from '../../../models';

export async function getProjectUseCase(id: string, userId: string, repository = projectRepository): Promise<Project> {
  const project = await repository.get(id);
  if (project.userId !== userId) throw new Error('Item not found');
  return project;
}
