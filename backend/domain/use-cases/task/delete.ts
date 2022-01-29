import { taskRepository } from '..';
import { Task } from '../../models';

export function deleteTaskUseCase(id: string): Promise<Task> {
  return taskRepository.delete(id);
}
