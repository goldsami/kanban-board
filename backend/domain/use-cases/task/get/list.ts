import { Task } from '../../../models';
import { taskRepository } from '../../../../domain';

export function getTasksUseCase(projectId: string): Promise<Task[]> {
  return taskRepository.getList(projectId);
}
