import { typeDefs, type MeessageType } from "./types";
import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';

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

    const server = new ApolloServer({ 
      typeDefs, 
      resolvers,
      context: async ({ req }: any) => {
        return { db: database };
      }
    });
    await server.start();

    const app = express();
    server.applyMiddleware({ app });

    app.listen({ port: 4000 }, () =>
      console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
    );
  } catch (error) {
    console.error('Failed to start the server:', error);
    await client.close();
    process.exit(1);
  }
}

startServer();

// Handle application shutdown
process.on('SIGINT', async () => {
  await client.close();
  console.log('MongoDB connection closed');
  process.exit(0);
});