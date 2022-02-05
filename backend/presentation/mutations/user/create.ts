import { createUserUseCase } from '@domain';
import { CreateUserType, UserType } from '../../types';

export const createUserMutation = {
  type: UserType,
  args: {
    data: { type: CreateUserType },
  },
  resolve: (_, { data }) => {

    return createUserUseCase(data);
  },
};
