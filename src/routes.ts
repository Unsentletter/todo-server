import express from 'express';

import { routeGroup as userRoutes } from './modules/user/user.routes';

/**
 * All new route groups must be added in here
 */
const allRouteGroups = [userRoutes];

export const registerRoutes = (app: express.Application): void => {
  // Home route
  app.get('/', async function (req, res) {
    res.send('TODO API');
    res.send();
  });

  // Register module routes
  for (const group of allRouteGroups) {
    app.use(`/${group.basePath}`, group.router);
  }

  // Catch-all route
  app.get('*', async function (req, res) {
    res.status(404);
    res.end();
  });
};
