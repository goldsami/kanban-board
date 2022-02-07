import { getListsUseCase } from '../../../domain';
import { GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';
import { ListType } from '../../types';

export const listsQuery = {
  type: new GraphQLList(ListType),
  args: {
    projectId: { type: new GraphQLNonNull(GraphQLString) }
  },
  description: 'List of all Lists',
  resolve(_, { projectId }) {
    return getListsUseCase(projectId);
  },
};
