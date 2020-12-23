import { User } from './user.model';

interface CreateUserInput {
  name: string;
  email: string;
  password: string;
}

export async function createUser({ name, email, password }: CreateUserInput): Promise<any> {
  try {
    const user = await User.create(name, email, password);
    return user;
  } catch (e) {
    console.error('Could not create user', e);
    return;
  }
}
