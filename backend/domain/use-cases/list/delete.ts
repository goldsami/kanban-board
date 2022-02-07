import { getListUseCase } from '.';
import { listRepository } from '..';
import { List } from '../../models';

export async function deleteListUseCase(id: string, userId: string, repository = listRepository): Promise<List> {
  await getListUseCase(id, userId);
  return repository.delete(id);
}
