const { typeDefs } = require("./types");
const { MongoClient, ServerApiVersion } = require("mongodb");
const dotenv = require("dotenv");
const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const { ApolloServerPluginDrainHttpServer } = require("@apollo/server/plugin/drainHttpServer");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");

dotenv.config();

const uri = process.env.MONGODB_URI;

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

    // Configure CORS to allow all origins
    app.use(cors());

    app.use(
      "/graphql",
      // cors<cors.CorsRequest>(),
      bodyParser.json(),
      expressMiddleware(server, {
        context: async () => ({ db: database }),
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

    await new Promise((resolve) =>
      httpServer.listen({ port: 4000 }, resolve)
    );
    console.log(`🚀 Server ready at http://localhost:4000/graphql`);
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
