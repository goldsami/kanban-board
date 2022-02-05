import { getTaskUseCase } from '.';
import { taskRepository } from '..';
import { Task } from '../../models';

export async function deleteTaskUseCase(id: string, userId: string, repository = taskRepository): Promise<Task> {
  await getTaskUseCase(id, userId);
  return repository.delete(id);
}
