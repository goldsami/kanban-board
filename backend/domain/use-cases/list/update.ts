import { getListUseCase } from '.';
import { listRepository } from '..';
import { List } from '../../models';

export async function updateListUseCase(id: string, userId: string, list: Partial<List>, repository = listRepository): Promise<List> {
  const oldList = await getListUseCase(id, userId);

  if (isFinite(list.order)) {
    const greaterLists = await repository.getWhereOrderGreaterThan(oldList.projectId, list.order)

    for (const l of greaterLists.filter(x => x.id !== id)) {
      await repository.update(l.id, {order: l.order + 1})
    }
  }

  return repository.update(id, list);
}
