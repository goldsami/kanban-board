import { userRepository } from '..';
import { User } from '../../models';

export function deleteUserUseCase(id: string, repository = userRepository): Promise<User> {
  return repository.delete(id);
}
