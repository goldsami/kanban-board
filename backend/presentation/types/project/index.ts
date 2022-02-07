import { getListsUseCase } from '../../../domain';
import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { ListType } from '..';

export const ProjectType = new GraphQLObjectType({
  name: 'ProjectType',
  description: 'This represent a project',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    lists: {
      type: new GraphQLList(ListType), resolve: ({ id }) => {
        return getListsUseCase(id);
      }
    }
  }),
});

export * from './create';
