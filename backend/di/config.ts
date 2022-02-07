import { ListAdapter, ProjectAdapter, TaskAdapter, UserAdapter } from '../data';
import { Container } from 'inversify';
import { TYPES } from './types';
import { AuthRepository, ListRepository, ProjectRepository, TaskRepository, UserRepository } from '../domain';
import { FirebaseAuthAdapter } from '../auth';

const myContainer = new Container();
myContainer.bind<UserRepository>(TYPES.UserRepository).to(UserAdapter);
myContainer.bind<ProjectRepository>(TYPES.ProjectRepository).to(ProjectAdapter);
myContainer.bind<TaskRepository>(TYPES.TaskRepository).to(TaskAdapter);
myContainer.bind<ListRepository>(TYPES.ListRepository).to(ListAdapter);
myContainer.bind<AuthRepository>(TYPES.AuthRepository).to(FirebaseAuthAdapter);

export { myContainer };
