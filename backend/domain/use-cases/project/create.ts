import { projectRepository } from '..';
import { Project } from '../../models';

export function createProjectUseCase(project: Partial<Project>, repository = projectRepository): Promise<Project> {
  return repository.create(project);
}
