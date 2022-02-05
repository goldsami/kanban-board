import { GraphQLNonNull, GraphQLString } from 'graphql';
import { deleteUserUseCase } from '@domain';
import { UserType } from '../../types';

export const deleteUserMutation = {
  type: UserType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: (_, { id }) => {

    return deleteUserUseCase(id);
  },
};
