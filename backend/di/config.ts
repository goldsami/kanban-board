import { ProjectAdapter, TaskAdapter, UserAdapter } from '../data';
import { Container } from 'inversify';
import { TYPES } from './types';
import { UserRepository } from '../domain';

const myContainer = new Container();
myContainer.bind<UserRepository>(TYPES.UserRepository).to(UserAdapter);
myContainer.bind<UserRepository>(TYPES.ProjectRepository).to(ProjectAdapter);
myContainer.bind<UserRepository>(TYPES.TaskRepository).to(TaskAdapter);

export { myContainer };
