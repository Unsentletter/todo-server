import http from 'http';

import express from 'express';

import { HTTP_PORT } from '@src/environment';

/**
 * Creates and returns a HTTP Server
 */
export async function startHttpServer(app: express.Application): Promise<http.Server> {
  const httpServer = new Promise<http.Server>((resolve) => {
    const s = app.listen(HTTP_PORT, () => {
      resolve(s);
    });
  });
  return httpServer;
}
