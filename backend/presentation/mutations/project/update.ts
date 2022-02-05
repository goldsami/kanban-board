import { GraphQLNonNull, GraphQLString } from 'graphql';
import { updateProjectUseCase } from '@domain';
import { CreateProjectType, ProjectType } from '../../types';

export const updateProjectMutation = {
  type: ProjectType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    data: { type: CreateProjectType },
  },
  resolve: (_, { id, data }, context) => {
    return updateProjectUseCase(id, data, context.userId);
  },
};
