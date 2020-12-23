import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { getDbClient } from '@src/utils/db';

export class User {
  static async create(name: string, email: string, password: string): Promise<any> {
    const db = await getDbClient();
    const hashedPassword = await bcrypt.hash(password, 10);
    const currentDate = new Date();

    const userObject = {
      name,
      email,
      password: hashedPassword,
      created: currentDate,
    };
    const createUserObject = await db.collection('user').insertOne(userObject);

    if (!createUserObject) {
      throw new Error('Error occurred while creating user');
    }

    const token = jwt.sign({ _id: createUserObject.ops[0]._id }, 'secretvalue');
    const newUser = createUserObject.ops[0];

    return { user: newUser, token };
  }

  static async signIn(email: string, password: string): Promise<any> {
    const db = await getDbClient();
    const user = await db.collection('user').findOne({ email });

    if (!user) {
      throw new Error('unable to log in');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error('unable to log in');
    }

    const token = jwt.sign({ _id: user._id }, 'secretvalue');
    return { user, token };
  }
}
