import { Db, MongoClient } from 'mongodb';

import { DB_LOCAL } from '@src/environment';

// Instantiated DB client
let connectedClient: MongoClient;

/**
 * Determine connection string to be used for DB connection
 */
function resolveDbHost(): string {
  const dbHostnames = {
    local: DB_LOCAL,
  };

  const dbhost = dbHostnames['local'];

  if (!dbhost) {
    throw Error('No valid DB connection provided - aborting');
  }

  return dbhost;
}

/**
 * Instantiates or returns a connected DB client
 */
export async function getDbClient(dbName = 'PoolTodo'): Promise<Db> {
  let client: MongoClient;

  // Get Mongo client
  if (connectedClient) {
    // Re-use existing connection
    client = connectedClient;
  } else {
    // Instantiate new connection
    const dbhost = resolveDbHost();
    client = new MongoClient(dbhost, {
      useNewUrlParser: true,
      poolSize: 10,
      bufferMaxEntries: 0,
      useUnifiedTopology: true,
    });

    try {
      await client.connect();
    } catch (e) {
      console.error('Could not connect to MongoDB client');
      throw Error(e);
    }

    // Persist connection fro re-use
    connectedClient = client;
  }

  // Get specified database
  const db = client.db(dbName);

  return db;
}
