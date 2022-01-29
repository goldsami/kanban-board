import { projectRepository } from '..';
import { Project } from '../../models';

export function updateProjectUseCase(id: string, project: Partial<Project>, repository = projectRepository): Promise<Project> {
  return repository.update(id, project);
}
