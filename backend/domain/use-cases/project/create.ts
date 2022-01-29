import { projectRepository } from '..';
import { Project } from '../../models';

export function createProjectUseCase(project: Partial<Project>): Promise<Project> {
  return projectRepository.create(project);
}
