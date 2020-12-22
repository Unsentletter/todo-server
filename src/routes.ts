import express from 'express';

// import {routeGroup as <routeName>} from '<path>';

/**
 * All new route groups must be added in here
 */
const allRouteGroups = [];

export const registerRoutes = (app: express.Application): void => {
  // Home route
  app.get('/', async function (req, res) {
    res.send('Social API');
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
