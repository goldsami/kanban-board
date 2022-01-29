import { GraphQLObjectType } from 'graphql';
import { projectQuery, projectsQuery } from './project';
import { taskQuery, tasksQuery } from './task';
import { userQuery, usersQuery } from './user';

export const query = new GraphQLObjectType({
  name: 'KanbanAppSchema',
  description: 'Kanban Application Schema Query Root',
  fields: {
    users: usersQuery,
    user: userQuery,
    projects: projectsQuery,
    project: projectQuery,
    tasks: tasksQuery,
    task: taskQuery,
  },
});
