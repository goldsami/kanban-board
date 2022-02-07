import { List } from '../../../models';
import { listRepository } from '../../../../domain';

export function getListsUseCase(projectId: string, repository = listRepository): Promise<List[]> {
  return repository.getList(projectId);
}
