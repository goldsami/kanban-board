import { getTaskUseCase } from '.';
import { taskRepository } from '..';
import { Task } from '../../models';

export async function updateTaskUseCase(id: string, userId: string, task: Partial<Task>, repository = taskRepository): Promise<Task> {
  await getTaskUseCase(id, userId);
  return repository.update(id, task);
}
