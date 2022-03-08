import { getListUseCase, taskRepository } from '..';
import { Task } from '../../models';

export async function createTaskUseCase(task: Partial<Task>, userId: string, repository = taskRepository): Promise<Task> {
  await getListUseCase(task.listId, userId);

  const lastTask = await repository.getLast(task.listId);
  return repository.create({...task, order: (lastTask?.order || 0) + 1});
}
