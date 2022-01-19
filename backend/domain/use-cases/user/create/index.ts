import { User } from '../../../models';

export function createUserUseCase(user: Partial<User>): Promise<User> {
  console.log('create user', user);

  return null;
}