import { projectRepository } from '..';
import { Project } from '../../models';

export function updateProjectUseCase(id: string, project: Partial<Project>): Promise<Project> {
  return projectRepository.update(id, project);
}
