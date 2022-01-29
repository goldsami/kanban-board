import { Project } from '../../../models';
import { projectRepository } from '../../../../domain';

export function getProjectsUseCase(userId: string): Promise<Project[]> {
  return projectRepository.getList(userId);
}
