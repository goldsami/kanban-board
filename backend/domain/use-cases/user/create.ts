import { userRepository } from '..';
import { User } from '../../models';

export function createUserUseCase(user: Partial<User>, repository = userRepository): Promise<User> {
  return repository.create(user);
}
