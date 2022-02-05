import { GraphQLObjectType } from 'graphql';
import { createProjectMutation, deleteProjectMutation, updateProjectMutation } from './project';
import { createTaskMutation, deleteTaskMutation, updateTaskMutation } from './task';
// import { createUserMutation, deleteUserMutation, updateUserMutation } from './user';

export const mutation = new GraphQLObjectType({
  name: 'mutation',
  description: 'Kanban Application Schema Mutation Root',
  fields: {
    // createUser: createUserMutation,
    // updateUser: updateUserMutation,
    // deleteUser: deleteUserMutation,
    createProject: createProjectMutation,
    updateProject: updateProjectMutation,
    deleteProject: deleteProjectMutation,
    createTask: createTaskMutation,
    updateTask: updateTaskMutation,
    deleteTask: deleteTaskMutation,
  },
});
