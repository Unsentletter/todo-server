import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import { HTTP_PORT } from '@src/environment';
import { registerRoutes } from '@src/routes';
import { startHttpServer } from '@src/utils/http';

import { getDbClient } from './utils/db';

export async function startServer(): Promise<void> {
  // Create Express server
  const app = express();

  // Express configuration
  app.disable('x-powered-by');
  app.use(bodyParser.urlencoded({ extended: true })).use(bodyParser.json());
  app.use(cors());

  // Mount API routes
  registerRoutes(app);

  // Instantiate DB client
  await getDbClient();

  // Mount HTTP Server
  await startHttpServer(app);

  console.info(`✓\tStarted API server on port ${HTTP_PORT}`);
}
