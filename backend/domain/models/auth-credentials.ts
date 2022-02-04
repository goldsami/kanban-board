export class AuthCredentials {
  email: string;
  password: string;
}

export type SignUpInputType = AuthCredentials & { name: string };
