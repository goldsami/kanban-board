import { CreateUserType, UserType } from '../../types';

export const createUserMutation = {
  type: UserType,
  args: {
    data: { type: CreateUserType },
  },
  resolve: (args) => {
    console.log('resolve', { args });
    return null;
  },
};
