import { AuthCredentials } from '../models';

export interface AuthResult {
  token: string;
  userId: string;
}

export interface AuthRepository {
  login(credentials: AuthCredentials): Promise<AuthResult>;
  signUp(credentials: AuthCredentials): Promise<AuthResult>;
  verifyToken(token: string): Promise<string>;
}
