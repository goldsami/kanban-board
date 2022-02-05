import { getProjectUseCase } from '.';
import { projectRepository } from '..';
import { Project } from '../../models';

export async function deleteProjectUseCase(id: string, userId: string, repository = projectRepository): Promise<Project> {
  await getProjectUseCase(id, userId);
  return repository.delete(id);
}
