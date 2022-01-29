import { ProjectRepository, TaskRepository, UserRepository } from '../repositories';
import { myContainer, TYPES } from '../../di';

const userRepository = myContainer.get<UserRepository>(TYPES.UserRepository);
const projectRepository = myContainer.get<ProjectRepository>(TYPES.ProjectRepository);
const taskRepository = myContainer.get<TaskRepository>(TYPES.TaskRepository);


export * from './user';
export * from './project';
export * from './task';
export { userRepository, projectRepository, taskRepository };
