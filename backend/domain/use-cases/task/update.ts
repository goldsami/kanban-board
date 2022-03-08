import { getTaskUseCase } from '.';
import { taskRepository } from '..';
import { Task } from '../../models';

export async function updateTaskUseCase(id: string, userId: string, task: Partial<Task>, repository = taskRepository): Promise<Task> {
  const oldTask = await getTaskUseCase(id, userId);

  if (isFinite(task.order)) {
    const greaterLists = await repository.getWhereOrderGreaterThan(oldTask.listId, task.order)

    for (const l of greaterLists.filter(x => x.id !== id)) {
      await repository.update(l.id, {order: l.order + 1})
    }
  }

  return repository.update(id, task);
}
