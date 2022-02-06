import { GraphQLNonNull, GraphQLString } from 'graphql';
import { updateUserUseCase } from '../../../domain';
import { CreateUserType, UserType } from '../../types';

export const updateUserMutation = {
  type: UserType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    data: { type: CreateUserType },
  },
  resolve: (_, { id, data }) => {
    return updateUserUseCase(id, data);
  },
};
