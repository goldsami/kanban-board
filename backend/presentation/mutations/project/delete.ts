import { GraphQLNonNull, GraphQLString } from 'graphql';
import { deleteProjectUseCase } from '../../../domain';
import { ProjectType } from '../../types';

export const deleteProjectMutation = {
  type: ProjectType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: (_, { id }) => {

    return deleteProjectUseCase(id);
  },
};
