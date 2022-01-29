import { taskRepository } from '../../../../domain';
import { Task } from '../../../models';

export function getTaskUseCase(id: string): Promise<Task> {
  return taskRepository.get(id);
}
