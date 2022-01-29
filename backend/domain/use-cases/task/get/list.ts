import { Task } from '../../../models';
import { taskRepository } from '../../../../domain';

export function getTasksUseCase(projectId: string, repository = taskRepository): Promise<Task[]> {
  return repository.getList(projectId);
}
