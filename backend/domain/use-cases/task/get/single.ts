import { getProjectUseCase, taskRepository } from '../../../../domain';
import { Task } from '../../../models';

export async function getTaskUseCase(id: string, userId: string, repository = taskRepository): Promise<Task> {
  const task = await repository.get(id);
  await getProjectUseCase(task.listId, userId);
  return task;
}
