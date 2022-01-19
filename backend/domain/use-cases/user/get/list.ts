import { User } from '../../../models'

export function getUsersUseCase(): Promise<User[]> {
  return Promise.resolve([{ id: 'one', name: 'nm' }, { id: 'two', name: 'nm2' }]);
}