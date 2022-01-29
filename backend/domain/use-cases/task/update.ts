import { taskRepository } from '..';
import { Task } from '../../models';

export function updateTaskUseCase(id: string, task: Partial<Task>, repository = taskRepository): Promise<Task> {
  return repository.update(id, task);
}
