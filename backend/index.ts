import { typeDefs, type MeessageType } from "./types";
import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";
import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("MONGODB_URI is not defined in the environment variables");
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function startServer() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const database = client.db("messages");
    const messagesCollection = database.collection("messages");

    const resolvers = {
      Query: {
        messages: async () => {
          return await messagesCollection
            .find()
            .sort({ timestamp: -1 })
            .toArray();
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
      "/graphql",
      cors<cors.CorsRequest>(),
      bodyParser.json(),
      expressMiddleware(server, {
        context: async ({ req }: any) => ({ db: database }),
      }),
    );

    // Add a new REST endpoint for adding messages
    app.post("/api/messages", async (req, res) => {
      try {
        const { text, userImage, walletAddress, username } = req.body;
        const newMessage = {
          text,
          userImage,
          walletAddress,
          username,
          timestamp: new Date(),
        };
        const result = await messagesCollection.insertOne(newMessage);
        res.status(201).json({ id: result.insertedId, ...newMessage });
      } catch (error) {
        console.error("Error adding message:", error);
        res.status(500).json({ error: "Failed to add message" });
      }
    });

    await new Promise<void>((resolve) =>
      httpServer.listen({ port: 4000 }, resolve),
    );
    console.log(`🚀 Server ready at https://mancala-1do3.onrender.com/graphql`);
  } catch (error) {
    console.error("Failed to start the server:", error);
    await client.close();
    process.exit(1);
  }
}

startServer();

process.on("SIGINT", async () => {
  await client.close();
  console.log("MongoDB connection closed");
  process.exit(0);
});
