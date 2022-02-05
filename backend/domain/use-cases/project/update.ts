import { getProjectUseCase } from '.';
import { projectRepository } from '..';
import { Project } from '../../models';

export async function updateProjectUseCase(id: string, userId: string, project: Partial<Project>, repository = projectRepository): Promise<Project> {
  await getProjectUseCase(id, userId);
  return repository.update(id, project);
}
