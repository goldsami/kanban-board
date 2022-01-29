import { taskRepository } from '..';
import { Task } from '../../models';

export function deleteTaskUseCase(id: string, repository = taskRepository): Promise<Task> {
  return repository.delete(id);
}
