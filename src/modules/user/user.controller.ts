import { User } from './user.model';

interface CreateUserInput {
  name: string;
  email: string;
  password: string;
}

interface SignInUserInput {
  email: string;
  password: string;
}

interface CreateOrganisationInput {
  orgName: string;
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

export async function signInUser({ email, password }: SignInUserInput): Promise<any> {
  try {
    const user = await User.signIn(email, password);
    return user;
  } catch (e) {
    console.error('Could not sign in user');
    return;
  }
}

export async function createOrganisation({ orgName }: CreateOrganisationInput): Promise<any> {
  try {
    const organisation = await User.createOrganisation(orgName);
    return organisation;
  } catch (e) {
    console.error('Could not create company', e);
  }
}
