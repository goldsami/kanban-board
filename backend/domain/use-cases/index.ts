import { AuthRepository, ListRepository, ProjectRepository, TaskRepository, UserRepository } from '../repositories';
import { myContainer, TYPES } from '../../di';

const userRepository = myContainer.get<UserRepository>(TYPES.UserRepository);
const projectRepository = myContainer.get<ProjectRepository>(TYPES.ProjectRepository);
const taskRepository = myContainer.get<TaskRepository>(TYPES.TaskRepository);
const listRepository = myContainer.get<ListRepository>(TYPES.ListRepository);
const authRepository = myContainer.get<AuthRepository>(TYPES.AuthRepository);


export * from './user';
export * from './project';
export * from './task';
export * from './list';
export * from './auth';
export { userRepository, projectRepository, taskRepository, authRepository, listRepository };
