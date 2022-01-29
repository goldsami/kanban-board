import { projectRepository } from '..';
import { Project } from '../../models';

export function deleteProjectUseCase(id: string): Promise<Project> {
  return projectRepository.delete(id);
}
