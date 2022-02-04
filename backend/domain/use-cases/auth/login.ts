import { authRepository } from "..";
import { AuthCredentials } from "../../models";

export function loginUseCase(credentials: AuthCredentials, repository = authRepository): Promise<string> {
  return repository.login(credentials);
}
