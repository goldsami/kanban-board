import { userRepository } from '../../../../domain';
import { User } from '../../../models';

export function getUserUseCase(id: string, repository = userRepository): Promise<User> {
  return repository.get(id);
}
