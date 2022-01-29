import { Task } from '../../../models';
import { taskRepository } from '../../../../domain';

export function getTasksUseCase(): Promise<Task[]> {
  return taskRepository.getList();
}
