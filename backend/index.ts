import { typeDefs, type MeessageType } from "./types";
import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';
import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error('MONGODB_URI is not defined in the environment variables');
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function startServer() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const database = client.db("messages");
    const messagesCollection = database.collection('messages');
 
    const resolvers = {
      Query: {
        messages: async () => {
          return await messagesCollection.find().sort({ timestamp: -1 }).toArray();
        },
      },
      Mutation: {
        addMessage: async (_: any, { text, userImage, walletAddress, username }: MeessageType) => {
          const newMessage = { text, userImage, walletAddress, username, timestamp: new Date() };
          const result = await messagesCollection.insertOne(newMessage);
          return { id: result.insertedId, ...newMessage };
        },
      },
    };

    const app = express();
    const httpServer = http.createServer(app);

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    await server.start();

    app.use(
      '/graphql',
      cors<cors.CorsRequest>(),
      bodyParser.json(),
      expressMiddleware(server, {
        context: async ({ req }: any) => ({ db: database }),
      }),
    );

    await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000/graphql`);
  } catch (error) {
    console.error('Failed to start the server:', error);
    await client.close();
    process.exit(1);
  }
}

startServer();

process.on('SIGINT', async () => {
  await client.close();
  console.log('MongoDB connection closed');
  process.exit(0);
});