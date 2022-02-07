import { getProjectUseCase, listRepository } from '..';
import { List } from '../../models';

export async function createListUseCase(list: Partial<List>, userId: string, repository = listRepository): Promise<List> {
  await getProjectUseCase(list.projectId, userId);
  return repository.create(list);
}
