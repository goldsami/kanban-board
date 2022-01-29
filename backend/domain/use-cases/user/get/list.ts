import { User } from '../../../models';
import { userRepository } from '../../../../domain';

export function getUsersUseCase(repository = userRepository): Promise<User[]> {
  return repository.getList();
}
