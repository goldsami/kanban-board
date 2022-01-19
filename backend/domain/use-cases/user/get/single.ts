import { User } from '../../../models';

export function getUserUseCase(id: string): Promise<User> {
  return Promise.resolve({ id: 'one', name: 'nm' });
}
