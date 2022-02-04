import { authRepository } from '..';

export function verifyTokenUseCase(token: string, repository = authRepository): Promise<string> {
  return repository.verifyToken(token);
}
