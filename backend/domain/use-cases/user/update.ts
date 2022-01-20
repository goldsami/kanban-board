import { User } from '../../models';

export function updateUserUseCase(id: string, user: Partial<User>): Promise<User> {
  console.log('update user', user, id);

  return null;
}
