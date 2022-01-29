import { userRepository } from '..';
import { User } from '../../models';

export function updateUserUseCase(id: string, user: Partial<User>, repository = userRepository): Promise<User> {
  return repository.update(id, user);
}
