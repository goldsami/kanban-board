import { taskRepository } from '..';
import { Task } from '../../models';

export function createTaskUseCase(task: Partial<Task>, repository = taskRepository): Promise<Task> {
  return repository.create(task);
}
