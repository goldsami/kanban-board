import { projectRepository } from '../../../../domain';
import { Project } from '../../../models';

export function getProjectUseCase(id: string): Promise<Project> {
  return projectRepository.get(id);
}
