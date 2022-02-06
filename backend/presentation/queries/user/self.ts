import { getUserUseCase } from '@domain';
import { UserType } from '../../types';

export const selfQuery = {
  type: UserType,
  description: 'Query Self',
  resolve(_, args, context) {
    return getUserUseCase(context.userId);
  },
};
