import { getProjectUseCase, listRepository } from '../../../../domain';
import { List } from '../../../models';

export async function getListUseCase(id: string, userId: string, repository = listRepository): Promise<List> {
  const list = await repository.get(id);
  await getProjectUseCase(list.projectId, userId);
  return list;
}
