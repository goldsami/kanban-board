import { userRepository } from '../../../../domain';
import { User } from '../../../models';

export function getUserUseCase(id: string): Promise<User> {
  return userRepository.get(id);
}
