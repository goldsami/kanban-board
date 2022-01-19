import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { UserType } from '../types';

export const query = new GraphQLObjectType({
  name: 'KanbanAppSchema',
  description: 'Kanban Application Schema Query Root',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      description: 'List of all Users',
      resolve() {
        console.log('list of users');

        return null;
      },
    },
    user: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      description: 'Single User',
      resolve(source, args) {
        console.log('single user query', args);

        return null;
      },
    },
  },
});