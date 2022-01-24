import { userRepository } from '../../../../domain';
import { User } from '../../../models';

export function getUserUseCase(id: string): Promise<User> {
  console.log('get user use case', id);
  return userRepository.get(id);
}
