import { GraphQLNonNull, GraphQLString } from 'graphql';
import { deleteProjectUseCase } from '@domain';
import { ProjectType } from '../../types';

export const deleteProjectMutation = {
  type: ProjectType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: (_, { id }, context) => {
    return deleteProjectUseCase(id, context.userId);
  },
};
