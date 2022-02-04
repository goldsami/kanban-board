import { authRepository } from "..";
import { AuthCredentials } from "../../models";

export function signUpUseCase(credentials: AuthCredentials, repository = authRepository): Promise<string> {
  return repository.signUp(credentials);
}
