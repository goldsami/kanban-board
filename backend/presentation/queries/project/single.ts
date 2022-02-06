import { getProjectUseCase } from '@domain';
import { GraphQLNonNull, GraphQLString } from 'graphql';
import { ProjectType } from '../../types';

export const projectQuery = {
  type: ProjectType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) }
  },
  description: 'Single Project',
  resolve(_, { id }, context) {
    return getProjectUseCase(id, context.userId);
  },
};
