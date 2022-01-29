import { projectRepository } from '..';
import { Project } from '../../models';

export function deleteProjectUseCase(id: string, repository = projectRepository): Promise<Project> {
  return repository.delete(id);
}
