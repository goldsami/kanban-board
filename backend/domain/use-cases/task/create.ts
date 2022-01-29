import { taskRepository } from '..';
import { Task } from '../../models';

export function createTaskUseCase(task: Partial<Task>): Promise<Task> {
  return taskRepository.create(task);
}
