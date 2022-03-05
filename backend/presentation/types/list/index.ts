import { getTasksUseCase } from '../../../domain';
import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { TaskType } from '..';

export const ListType = new GraphQLObjectType({
  name: 'ListType',
  description: 'This represent a list',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    projectId: { type: new GraphQLNonNull(GraphQLString) },
    tasks: {
      type: new GraphQLList(TaskType), resolve: ({ id }) => {
        return getTasksUseCase(id);
      }
    }
  }),
});

export * from './create';
