import { getProjectUseCase, listRepository } from '..';
import { List } from '../../models';

export async function createListUseCase(list: Partial<List>, userId: string, repository = listRepository): Promise<List> {
  await getProjectUseCase(list.projectId, userId);

  const lastList = await repository.getLast(list.projectId);
  return repository.create({...list, order: (lastList?.order || 0) + 1});
}
