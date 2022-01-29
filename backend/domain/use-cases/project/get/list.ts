import { Project } from '../../../models';
import { projectRepository } from '../../../../domain';

export function getProjectsUseCase(): Promise<Project[]> {
  return projectRepository.getList();
}
