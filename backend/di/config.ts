import { UserAdapter } from '../data';
import { Container } from 'inversify';
import { TYPES } from './types';
import { UserRepository } from '../domain';

const myContainer = new Container();
myContainer.bind<UserRepository>(TYPES.UserRepository).to(UserAdapter);

export { myContainer };
