import { ProjectAdapter, TaskAdapter, UserAdapter } from '../data';
import { Container } from 'inversify';
import { TYPES } from './types';
import { ProjectRepository, TaskRepository, UserRepository } from '../domain';

const myContainer = new Container();
myContainer.bind<UserRepository>(TYPES.UserRepository).to(UserAdapter);
myContainer.bind<ProjectRepository>(TYPES.ProjectRepository).to(ProjectAdapter);
myContainer.bind<TaskRepository>(TYPES.TaskRepository).to(TaskAdapter);

export { myContainer };
