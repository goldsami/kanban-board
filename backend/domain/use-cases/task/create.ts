import { getListUseCase, taskRepository } from '..';
import { Task } from '../../models';

export async function createTaskUseCase(task: Partial<Task>, userId: string, repository = taskRepository): Promise<Task> {
  await getListUseCase(task.listId, userId);
  return repository.create(task);
}
