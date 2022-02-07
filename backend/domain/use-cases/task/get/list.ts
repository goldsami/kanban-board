import { Task } from '../../../models';
import { taskRepository } from '../../../../domain';

export function getTasksUseCase(listId: string, repository = taskRepository): Promise<Task[]> {
  return repository.getList(listId);
}
