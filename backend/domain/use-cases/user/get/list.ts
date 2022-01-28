import { User } from '../../../models';
import { userRepository } from '../../../../domain';

export function getUsersUseCase(): Promise<User[]> {
  return userRepository.getList();
}
