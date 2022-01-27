import { userRepository } from '..';
import { User } from '../../models';

export function createUserUseCase(user: Partial<User>): Promise<User> {
  return userRepository.create(user);
}
