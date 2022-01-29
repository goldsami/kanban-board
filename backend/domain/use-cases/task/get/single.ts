import { taskRepository } from '../../../../domain';
import { Task } from '../../../models';

export function getTaskUseCase(id: string, repository = taskRepository): Promise<Task> {
  return repository.get(id);
}
