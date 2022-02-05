import { getProjectUseCase, taskRepository } from '..';
import { Task } from '../../models';

export async function createTaskUseCase(task: Partial<Task>, userId: string, repository = taskRepository): Promise<Task> {
  await getProjectUseCase(task.projectId, userId);
  return repository.create(task);
}
