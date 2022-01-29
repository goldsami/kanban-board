import { projectRepository } from '../../../../domain';
import { Project } from '../../../models';

export function getProjectUseCase(id: string, repository = projectRepository): Promise<Project> {
  return repository.get(id);
}
