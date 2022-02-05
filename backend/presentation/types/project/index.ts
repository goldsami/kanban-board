import { getTasksUseCase } from '@domain';
import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { TaskType } from '..';

export const ProjectType = new GraphQLObjectType({
  name: 'ProjectType',
  description: 'This represent a project',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    tasks: {
      type: new GraphQLList(TaskType), resolve: ({ id }) => {
        return getTasksUseCase(id);
      }
    }
  }),
});

export * from './create';
