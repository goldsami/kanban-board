import { taskRepository } from '..';
import { Task } from '../../models';

export function updateTaskUseCase(id: string, task: Partial<Task>): Promise<Task> {
  return taskRepository.update(id, task);
}
