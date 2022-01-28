import { userRepository } from '..';
import { User } from '../../models';

export function deleteUserUseCase(id: string): Promise<User> {
  return userRepository.delete(id);
}
