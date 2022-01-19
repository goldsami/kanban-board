import { GraphQLObjectType } from 'graphql';
import { userQuery, usersQuery } from './user';

export const query = new GraphQLObjectType({
  name: 'KanbanAppSchema',
  description: 'Kanban Application Schema Query Root',
  fields: {
    users: usersQuery,
    user: userQuery,
  },
});
