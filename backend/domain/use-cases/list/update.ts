import { getListUseCase } from '.';
import { listRepository } from '..';
import { List } from '../../models';

export async function updateListUseCase(id: string, userId: string, list: Partial<List>, repository = listRepository): Promise<List> {
  await getListUseCase(id, userId);
  return repository.update(id, list);
}
