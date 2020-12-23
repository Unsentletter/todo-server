import { Router } from 'express';

import { RouteGroup } from '@src/typings/route.types';
import { failResponse, successResponse } from '@src/utils/response';

// TODO - import controller functions here
// import {} from './user.controller';

const router = Router();

router.post('/', async (req, res) => {
  const reqBody: any = req.body;
});

export const routeGroup: RouteGroup = {
  basePath: 'api/user',
  router,
};
