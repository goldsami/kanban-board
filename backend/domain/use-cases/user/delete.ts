import { User } from '../../models';

export function deleteUserUseCase(id: string): Promise<User> {
  console.log('delete user', id);

  return null;
}
