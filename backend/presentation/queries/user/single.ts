import { GraphQLNonNull, GraphQLString } from 'graphql';
import { UserType } from '../../types';

export const userQuery = {
  type: UserType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) }
  },
  description: 'Single User',
  resolve(args) {
    console.log('single user query', args);

    return null;
  },
};
