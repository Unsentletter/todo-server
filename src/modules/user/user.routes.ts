import { Router } from 'express';

import { RouteGroup } from '@src/typings/route.types';
import { failResponse, successResponse } from '@src/utils/response';

import { createUser, signInUser } from './user.controller';

const router = Router();

router.post('/signup', async (req, res) => {
  // ParseInputs
  const reqBody: any = req.body;
  const name = reqBody.name;
  const email = reqBody.email;
  const password = reqBody.password;

  // Validate
  const didSucceed = await createUser({
    name,
    email,
    password,
  });

  // Response
  let response: any;
  if (didSucceed) {
    // response = successResponse(null);
  } else {
    // response = failResponse(null);
  }

  return res.json(didSucceed);
});

router.post('/signin', async (req, res) => {
  const reqBody = req.body;
  const email = reqBody.email;
  const password = reqBody.password;

  const signIn = await signInUser({ email, password });

  return res.json(signIn);
});

export const routeGroup: RouteGroup = {
  basePath: 'v1/user',
  router,
};
