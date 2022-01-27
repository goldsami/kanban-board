import { User } from '../../../models';
import { userRepository } from '../../../../domain';

export function getUsersUseCase(): Promise<User[]> {
  userRepository.getList();
  return Promise.resolve([{ id: 'one', name: 'nm' }, { id: 'two', name: 'nm2' }]);
}
