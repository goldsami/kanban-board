import { userRepository } from '..';
import { User } from '../../models';

export function updateUserUseCase(id: string, user: Partial<User>): Promise<User> {
  return userRepository.update(id, user);
}
