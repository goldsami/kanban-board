import { Project } from '../../../models';
import { projectRepository } from '../../../../domain';

export function getProjectsUseCase(userId: string, repository = projectRepository): Promise<Project[]> {
  return repository.getList(userId);
}
